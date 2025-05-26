import AppNavigator from './src/navigation/AppNavigator';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-url-polyfill/auto';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'RussoOne': require('./assets/fonts/RussoOne-Regular.ttf'),
      'SpaceGroteskBold': require('./assets/fonts/SpaceGrotesk-Bold.ttf'),
      'SpaceGroteskMed': require('./assets/fonts/SpaceGrotesk-Medium.ttf')
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <View><Text>Loading fonts...</Text></View>;
  }

  return <AppNavigator />;
}
