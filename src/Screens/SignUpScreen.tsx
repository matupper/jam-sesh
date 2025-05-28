import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import { set, useForm } from 'react-hook-form';
import CustomForm from '../Components/Forms/FormInput';
import { FormData, FormField } from '../Types/types';
import supabase from '@config/supabase';
import { callEmailVerifyFunction } from '@hooks/callEmailVerifyFunction';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { control, handleSubmit, watch } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: ''
    }
  });
  
  const [loading, setLoading] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  
  const password = watch('password');
  const repeatPassword = watch('repeatPassword');
  
  useEffect(() => {
    if (password && repeatPassword) {
      setIsPasswordMatch(password === repeatPassword);
      setLoading(false);
    }
  }, [password, repeatPassword]);

  const handleFormSubmit = async (data: FormData) => {
    if (data.password !== data.repeatPassword) {
      setIsPasswordMatch(false);
      return;
    }
    setIsPasswordMatch(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (error) throw error;
      await callEmailVerifyFunction(data.email, (verificationCode) => {
        navigation.navigate('VerificationScreen', {
          email: data.email,
          password: data.password,
          verificationCode: verificationCode
        });
      });
    } catch (error) {
      Alert.alert('Error sending verification email', error.message);
      return;
    }
  };

  const formFields: FormField[] = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      rules: { 
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      },
      keyboardType: 'email-address',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      rules: { 
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password must be at least 6 characters'
        }
      },
      secureTextEntry: true,
    },
    {
      name: 'repeatPassword',
      label: 'Repeat Password',
      placeholder: 'Repeat your password',
      rules: { 
        required: 'Repeat password is required',
        validate: (value) => value === password || 'Passwords do not match'
      },
      secureTextEntry: true,
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={watch('email')}
            onChangeText={(value) => set(control, 'email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={watch('password')}
            onChangeText={(value) => set(control, 'password', value)}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            value={watch('repeatPassword')}
            onChangeText={(value) => set(control, 'repeatPassword', value)}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit(handleFormSubmit)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {!isPasswordMatch && (
            <Text style={styles.errorText}>Passwords do not match!</Text>
          )}

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.linkText}>
              Already have an account? <Text style={styles.link}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'RussoOne',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontFamily: 'SpaceGroteskMed',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SpaceGroteskBold',
  },
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    textAlign: 'center',
    color: '#666',
    fontFamily: 'SpaceGroteskMed',
  },
  link: {
    color: '#007AFF',
    fontFamily: 'SpaceGroteskBold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default SignUpScreen;