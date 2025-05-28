import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#2C1A47', '#090909']}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Top: Form */}
        <View style={styles.formContent}>
          <Text style={styles.title}>Nice to see{'\n'}you again!</Text>

          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={20} color="#ccc" style={styles.icon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={20} color="#ccc" style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={() => console.log('Forgot Password')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Image
            source={require('../assets/back-for-another-set.png')}
            style={styles.taglineImage}
            resizeMode="contain"
          />
        </View>

        {/* Bottom: Button & Link */}
        <View style={styles.bottomContent}>
          <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Logging in...')}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Don’t have an account?{' '}
            <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </LinearGradient>
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
    paddingTop: 100,
    paddingBottom: 40,
  },
  formContent: {
    flexGrow: 0,
  },
  title: {
    fontSize: 36,
    fontFamily: 'RussoOne',
    color: '#FFFFFF',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 32,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff10',
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '100%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#CFCFCF',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  taglineImage: {
    width: 250,
    height: 40,
    marginVertical: 10,
  },
  bottomContent: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#7F5AF0',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SpaceGroteskBold',
  },
  signupText: {
    color: '#ccc',
    fontSize: 14,
  },
  signupLink: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
