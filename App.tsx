import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports'; // adjust the path if needed

Amplify.configure(awsconfig);

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { Platform } from 'react-native';

export default function App() {
  let Authenticator: any, AuthProvider: any;
  if (Platform.OS === 'web') {
    Authenticator = require('@aws-amplify/ui-react').Authenticator;
    AuthProvider = require('@aws-amplify/ui-react').Authenticator.Provider;
    require('@aws-amplify/ui-react/styles.css');
  } else {
    Authenticator = require('@aws-amplify/ui-react-native').Authenticator;
    AuthProvider = require('@aws-amplify/ui-react-native').Authenticator.Provider;
  }

  return (
    <AuthProvider>
      <Authenticator>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Authenticator>
    </AuthProvider>
  );
} 