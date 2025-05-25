import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports'; // adjust the path if needed

Amplify.configure(awsconfig);

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
} 