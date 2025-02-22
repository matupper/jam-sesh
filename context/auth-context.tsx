"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Amplify } from "aws-amplify";  // Keep for amplifyConfig
import { Hub } from "@aws-amplify/core";  // For event listening
import {
  signIn,
  signOut,
  signUp,
  getCurrentUser
} from "@aws-amplify/auth"; // Gen 2 style
import amplifyConfig from '@/amplify_outputs.json'; // Adjust the path as necessary
import { useRouter } from "next/navigation";

Amplify.configure(amplifyConfig);

// Define AuthUser Interface
export interface AuthUser {
  username: string;
  email: string;
  // Add other relevant user attributes
}

interface AuthContextType {
  user: AuthUser | null;
  signOut: () => Promise<void>;
  signIn: (username: string, password: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser({
          username: currentUser.userId ?? "",
          email: currentUser.userId ?? "",
        });
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();

    // Listen to auth events
    const unsubscribe = Hub.listen('auth', () => {
      checkUser();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signOutHandler = async () => {
    await signOut();
    router.push("/");
  };

  const signInHandler = async (email: string, password: string) => {
    return await signIn({ username: email, password: password });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, signOut: signOutHandler, signIn: signInHandler }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}; 