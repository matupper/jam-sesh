import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jam Sesh</Text>
      <Text style={styles.subtitle}>Connect with local musicians</Text>
      <Text style={styles.platform}>
        {Platform.OS === 'web' 
          ? 'Running on Web'
          : `Running on ${Platform.OS} via Expo Go`}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    // Platform-specific padding
    ...Platform.select({
      web: { padding: 20 },
      ios: { paddingTop: 50 },
      android: { paddingTop: 30 },
    }),
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#cccccc',
    marginBottom: 20,
  },
  platform: {
    fontSize: 14,
    color: '#888888',
    // Platform-specific styling
    ...Platform.select({
      web: { fontFamily: 'system-ui' },
      ios: { fontFamily: 'Helvetica Neue' },
      android: { fontFamily: 'Roboto' },
    }),
  },
}); 