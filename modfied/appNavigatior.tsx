import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreens';
import SignUpScreen from '../screens/SignUpScreen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();


export default function AppNavigator() {

   useEffect(() => {
  fetch('https://pcdbgxqnorijjhjvvqcq.supabase.co/rest/v1/', {
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZGJneHFub3JpampoanZ2cWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNDg1NTIsImV4cCI6MjA2MzcyNDU1Mn0.HmbsLLxz50ldkgJpFh9kOJ4iaKV4ySmZ4g-wWGhakGk',
    },
  })
    .then(res => res.json())
    .then(data => console.log('✅ Supabase fetch success:', data))
    .catch(err => console.log('❌ Fetch error:', err));
}, []);

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
