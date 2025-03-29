# Jackhammer IDE: Technical Specification

## Architecture Overview

Jackhammer builds upon Visual Studio Code's extensibility model to integrate AWS Bedrock services. The architecture follows a modular approach to ensure maintainability and incremental development.

### Key Components

1. **AWS Authentication Module**
   - Handles AWS credential management and session tokens
   - Integrates with AWS SDK for JavaScript
   - Supports IAM roles, access keys, and SSO

2. **Bedrock Service Client**
   - Wraps AWS Bedrock APIs
   - Manages model selection and inference requests
   - Handles response parsing and error handling

3. **UI Components**
   - Secondary sidebar panel for GenAI chat
   - Settings pages for configuration
   - Status bar indicators for connection state

4. **Context Management**
   - Code selection analyzer
   - Multi-file context gatherer
   - Workspace metadata collector

5. **Extension Core**
   - Command registration and handling
   - Event subscription and broadcasting
   - Extension lifecycle management

## Implementation Details

### AWS Authentication Implementation

```typescript
// Authentication service that will handle AWS credentials
export class AwsAuthService {
  private credentials: AWS.Credentials | null = null;
  private region: string = 'us-east-1';

  // Initialize auth from stored credentials or prompt user
  public async initialize(): Promise<boolean> {
    try {
      // Try to load credentials from VS Code secrets storage
      const storedCredentials = await this.loadStoredCredentials();
      if (storedCredentials) {
        this.credentials = storedCredentials;
        return true;
      }
      
      // If no stored credentials, prompt for configuration
      return await this.promptForCredentials();
    } catch (error) {
      console.error('Failed to initialize AWS auth:', error);
      return false;
    }
  }

  // Get Bedrock client configured with current credentials
  public getBedrockClient(): AWS.Bedrock {
    if (!this.credentials) {
      throw new Error('AWS credentials not configured');
    }
    
    return new AWS.Bedrock({
      credentials: this.credentials,
      region: this.region
    });
  }

  // Additional methods for credential management...
}
```

### Bedrock Service Client

```typescript
// Service for interacting with AWS Bedrock
export class BedrockService {
  private authService: AwsAuthService;
  private availableModels: BedrockModel[] = [];
  
  constructor(authService: AwsAuthService) {
    this.authService = authService;
  }
  
  // Fetch available models from AWS Bedrock
  public async getAvailableModels(): Promise<BedrockModel[]> {
    try {
      const client = this.authService.getBedrockClient();
      const response = await client.listFoundationModels().promise();
      
      this.availableModels = response.modelSummaries.map(model => ({
        id: model.modelId,
        name: model.modelName,
        provider: model.providerName
      }));
      
      return this.availableModels;
    } catch (error) {
      console.error('Failed to fetch models:', error);
      return [];
    }
  }
  
  // Generate text using selected model
  public async generateText(
    modelId: string, 
    prompt: string, 
    parameters: InferenceParameters
  ): Promise<string> {
    try {
      const client = this.authService.getBedrockClient();
      
      const response = await client.invokeModel({
        modelId,
        body: JSON.stringify({
          prompt,
          max_tokens: parameters.maxTokens,
          temperature: parameters.temperature,
          top_p: parameters.topP,
          // Other parameters as needed
        })
      }).promise();
      
      const result = JSON.parse(response.body.toString());
      return result.completion || result.generated_text;
    } catch (error) {
      console.error('Text generation failed:', error);
      throw error;
    }
  }
  
  // Additional methods for other Bedrock operations...
}
```

### UI Components - GenAI Chat Panel

```typescript
// Provider for the GenAI chat webview
export class GenAiChatViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'jackhammer.genAiChatView';
  private _view?: vscode.WebviewView;
  
  constructor(
    private readonly extensionUri: vscode.Uri,
    private readonly bedrockService: BedrockService
  ) {}
  
  // Create and configure the webview
  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    token: vscode.CancellationToken
  ): void | Thenable<void> {
    this._view = webviewView;
    
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    };
    
    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    
    // Set up message handling between extension and webview
    this._setupMessageHandling(webviewView.webview);
  }
  
  // Generate HTML for the chat interface
  private _getHtmlForWebview(webview: vscode.Webview): string {
    // HTML content for chat interface
    // Will include model selector, chat history, input area
    // ...
  }
  
  // Handle messages from the webview
  private _setupMessageHandling(webview: vscode.Webview): void {
    webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case 'sendMessage':
          await this._handleChatMessage(message.text);
          break;
        case 'selectModel':
          await this._handleModelSelection(message.modelId);
          break;
        // Other message types...
      }
    });
  }
  
  // Process a user chat message
  private async _handleChatMessage(text: string): Promise<void> {
    try {
      // Get current context
      const context = await this._getCurrentContext();
      
      // Generate response
      const response = await this.bedrockService.generateText(
        this._currentModelId,
        this._formatPromptWithContext(text, context),
        this._currentParameters
      );
      
      // Send response back to webview
      this._view?.webview.postMessage({
        command: 'receiveResponse',
        response
      });
    } catch (error) {
      // Handle and display error
    }
  }
  
  // Additional methods...
}
```

### Context Management

```typescript
// Service to gather relevant context for AI queries
export class ContextService {
  // Get context from current editor selection
  public async getSelectionContext(): Promise<string> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return '';
    }
    
    const selection = editor.selection;
    if (selection.isEmpty) {
      return '';
    }
    
    return editor.document.getText(selection);
  }
  
  // Get context from current file
  public async getCurrentFileContext(): Promise<FileContext> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return { fileName: '', content: '', language: '' };
    }
    
    return {
      fileName: editor.document.fileName,
      content: editor.document.getText(),
      language: editor.document.languageId
    };
  }
  
  // Get context from multiple files
  public async getMultiFileContext(fileUris: vscode.Uri[]): Promise<FileContext[]> {
    const contexts: FileContext[] = [];
    
    for (const uri of fileUris) {
      try {
        const document = await vscode.workspace.openTextDocument(uri);
        contexts.push({
          fileName: uri.fsPath,
          content: document.getText(),
          language: document.languageId
        });
      } catch (error) {
        console.error(`Failed to get context for ${uri.fsPath}:`, error);
      }
    }
    
    return contexts;
  }
  
  // Format contexts into a prompt the AI can use
  public formatContextForPrompt(
    userQuery: string, 
    contexts: FileContext[]
  ): string {
    let prompt = `USER QUERY: ${userQuery}\n\nCONTEXT:\n`;
    
    for (const ctx of contexts) {
      prompt += `--- File: ${ctx.fileName} (${ctx.language}) ---\n`;
      prompt += ctx.content;
      prompt += '\n\n';
    }
    
    prompt += `Based on the above context, ${userQuery}`;
    return prompt;
  }
  
  // Additional context gathering methods...
}
```

### Extension Activation

```typescript
// Main extension activation function
export async function activate(context: vscode.ExtensionContext) {
  // Initialize services
  const authService = new AwsAuthService(context.secrets);
  const bedrockService = new BedrockService(authService);
  const contextService = new ContextService();
  
  // Register GenAI chat view
  const chatViewProvider = new GenAiChatViewProvider(
    context.extensionUri,
    bedrockService,
    contextService
  );
  
  // Register commands
  const connectCommand = vscode.commands.registerCommand(
    'jackhammer.connectToAws', 
    async () => {
      const success = await authService.initialize();
      if (success) {
        vscode.window.showInformationMessage('Connected to AWS successfully');
        // Initialize models after connection
        await bedrockService.getAvailableModels();
      } else {
        vscode.window.showErrorMessage('Failed to connect to AWS');
      }
    }
  );
  
  // Register views, commands, and other extension points
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      GenAiChatViewProvider.viewType,
      chatViewProvider
    ),
    connectCommand,
    // Additional registrations...
  );
  
  // Try to initialize AWS connection on startup
  await authService.initialize().catch(err => {
    console.error('Failed to initialize on startup:', err);
  });
}
```

## Incremental Development Path

### Phase 1: Foundation Setup (Weeks 1-2)

#### Step 1: Fork VS Code and Set Up Development Environment
- Clone the VS Code repository
- Set up build environment
- Ensure the ability to run and debug the fork

#### Step 2: Create Basic Extension Structure
- Initialize extension manifest
- Set up TypeScript compilation
- Create basic activation function

#### Step 3: Implement AWS Authentication
- Create AWS credentials storage
- Implement authentication UI
- Add region selection
- Test basic connectivity to AWS

### Phase 2: AWS Bedrock Integration (Weeks 3-4)

#### Step 1: Implement Bedrock API Client
- Create client wrapper around AWS SDK
- Implement model listing functionality
- Add inference request handling
- Test with simple prompts

#### Step 2: Create Basic UI Shell
- Add secondary sidebar contribution
- Create simple chat interface
- Implement basic message display
- Add model selection dropdown

#### Step 3: Connect UI to Bedrock
- Wire up model selection to API
- Implement basic chat functionality
- Add error handling and loading states
- Test end-to-end flow

### Phase 3: Context-Aware Assistance (Weeks 5-6)

#### Step 1: Implement Context Gathering
- Add current file context extraction
- Implement selection context gathering
- Create context formatting utilities
- Test context inclusion in prompts

#### Step 2: Enhance Chat Interface
- Improve message formatting with markdown
- Add code block syntax highlighting
- Implement message history
- Add context display/toggle

#### Step 3: Add Parameter Controls
- Create temperature and top-p controls
- Implement max tokens setting
- Add system prompt customization
- Test different parameter configurations

### Phase 4: Code Intelligence Features (Weeks 7-8)

#### Step 1: Implement Code Generation
- Add command for generating code
- Create code insertion functionality
- Implement code completion suggestions
- Test with various programming languages

#### Step 2: Add Code Explanation
- Create command for explaining code
- Implement selection-based explanation
- Add formatting for explanations
- Test with complex code samples

#### Step 3: Settings Integration
- Create settings contribution
- Implement settings persistence
- Add configuration UI
- Test settings application

### Phase 5: MVP Polish (Weeks 9-10)

#### Step 1: Error Handling and Reliability
- Improve error messages
- Add automatic retry logic
- Implement connection recovery
- Test edge cases and failures

#### Step 2: Performance Optimization
- Optimize context gathering
- Improve response handling
- Reduce UI latency
- Test with large files/projects

#### Step 3: User Experience Refinement
- Add progress indicators
- Improve visual design
- Enhance keyboard shortcuts
- Test overall workflow

### Phase 6: MVP Testing and Launch (Weeks 11-12)

#### Step 1: Integration Testing
- Test all features together
- Verify AWS integration
- Check error scenarios
- Validate security measures

#### Step 2: Documentation
- Create user guide
- Add inline help
- Document settings
- Create setup instructions

#### Step 3: Packaging and Distribution
- Package extension
- Prepare for distribution
- Create installation guide
- Finalize launch materials

## Post-MVP Development Priorities

1. **AWS Knowledge Base Integration**
   - Add Knowledge Base selection
   - Implement query augmentation
   - Create Knowledge Base browser

2. **AWS Bedrock Agents Integration**
   - Add Agent selection interface
   - Implement Agent action viewing
   - Create Agent configuration UI

3. **Advanced IDE Features**
   - Implement inline suggestions
   - Add code refactoring tools
   - Create test generation functionality
   - Add documentation generation

4. **Collaboration Features**
   - Add conversation sharing
   - Implement team settings
   - Create prompt libraries

## Development Requirements

### Development Environment
- Node.js 16.x or higher
- TypeScript 4.x or higher
- VS Code development tools
- AWS account with Bedrock access

### Testing Tools
- Jest for unit testing
- VS Code Extension Testing Framework
- AWS SDK mocks for testing

### External Dependencies
- AWS SDK for JavaScript v3
- AWS Bedrock SDK
- React (for WebView UI)
- Monaco Editor (for code input/output)

## Security Considerations

### Credential Handling
- Use VS Code Secret Storage API for AWS credentials
- Support AWS credential providers (SSO, IAM roles)
- Never log or expose credentials in plain text

### Data Transmission
- Use HTTPS for all AWS API calls
- Implement request signing per AWS standards
- Apply appropriate encryption for data at rest

### Compliance
- Support VPC endpoints for air-gapped environments
- Implement logging for audit purposes
- Provide configuration for data retention policies

## Deployment and Distribution

### Extension Packaging
- Use vsce to package the extension
- Include all required dependencies
- Optimize package size

### Distribution Channels
- VS Code Marketplace
- Direct download option
- Enterprise distribution support

### Updates
- Implement update notification
- Provide changelog
- Support automatic updates

## Conclusion

This technical specification outlines the implementation details for the Jackhammer IDE, providing a clear roadmap for development. The incremental approach allows for regular testing and validation while building toward the complete MVP. By focusing on the AWS Bedrock integration first and gradually adding more sophisticated features, the development team can maintain a steady pace of progress while ensuring quality and reliability.
