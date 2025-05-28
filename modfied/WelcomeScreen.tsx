import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <View style={styles.centerContent}>
          <Text style={styles.title}>Jamply</Text>
          <Text style={styles.subtitle}>Connect.{'\n'}Create.{'\n'}Celebrate.</Text>
        </View>

        <View style={styles.bottomContent}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign up Free</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google sign in')}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    width: '100%',
  },
  title: {
    fontSize: 48,
    fontFamily: 'RussoOne',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SpaceGroteskMed',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 28,
  },
  signUpButton: {
    backgroundColor: '#7F5AF0',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpText: {
    fontFamily: 'SpaceGroteskBold',
    color: '#F4F4F4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  googleText: {
    fontFamily: 'SpaceGroteskBold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#090A0A',
  },
});
