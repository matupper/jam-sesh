import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports'; // adjust the path if needed

Amplify.configure(awsconfig);

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { Platform, Button, View } from 'react-native';
import ProfileSetup from './src/pages/ProfileSetup';

export default function App() {
  const [isGuest, setIsGuest] = useState(false);

  let Authenticator: any, AuthProvider: any;
  if (Platform.OS === 'web') {
    Authenticator = require('@aws-amplify/ui-react').Authenticator;
    AuthProvider = require('@aws-amplify/ui-react').Authenticator.Provider;
    require('@aws-amplify/ui-react/styles.css');
  } else {
    Authenticator = require('@aws-amplify/ui-react-native').Authenticator;
    AuthProvider = require('@aws-amplify/ui-react-native').Authenticator.Provider;
  }

  if (isGuest) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }

  if (Platform.OS === 'web') {
    return (
      <AuthProvider>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Authenticator>
            <ProfileSetup>
              <NavigationContainer>
                <TabNavigator />
              </NavigationContainer>
            </ProfileSetup>
          </Authenticator>
          <button
            style={{ marginTop: 20, padding: 10, fontSize: 16 }}
            onClick={() => setIsGuest(true)}
          >
            Continue as Guest
          </button>
        </div>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <Button title="Continue as Guest" onPress={() => setIsGuest(true)} />
          <ProfileSetup>
            <Authenticator>
              <NavigationContainer>
                <TabNavigator />
              </NavigationContainer>
            </Authenticator>
          </ProfileSetup>
        </View>
      </AuthProvider>
    );
  }
} 