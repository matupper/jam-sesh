import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../lib/supabase';

export default function SignUpScreen() {

  const navigation = useNavigation();


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      return alert('Please fill out all fields.');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const user = data?.user;
    if (!user) {
      alert('User sign-up incomplete. Please try again.');
      return;
    }

    // Insert into `profiles` table
    const { error: profileError } = await supabase.from('profiles').insert({
      id: user.id,
      username: username,
      email: email, // Optional
    });

    if (profileError) {
      alert('Signup successful, but error saving profile: ' + profileError.message);
    } else {
      alert('Signup complete! Check your email to confirm your account.');
    }
  };

  return (
    <LinearGradient
      colors={['#2C1A47', '#090909']}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Form content */}
        <View style={styles.formContent}>
          <Text style={styles.title}>Let’s get you{'\n'}started.</Text>

          <View style={styles.inputWrapper}>
            <FontAwesome name="search" size={20} color="#ccc" style={styles.icon} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#ccc"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>

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

          {/* Tagline image */}
          <Image
            source={require('../assets/press-play-tagline.png')}
            style={styles.taglineImage}
            resizeMode="contain"
          />
        </View>

        {/* Bottom content */}
        <View style={styles.bottomContent}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              Login
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
  taglineImage: {
    width: 250,
    height: 40,
    marginVertical: 20,
  },
  bottomContent: {
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#7F5AF0',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SpaceGroteskBold',
  },
  loginText: {
    color: '#ccc',
    fontSize: 14,
  },
  loginLink: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
