import React, { useEffect } from 'react';
import { createProfile } from '../graphql/mutations';
import { CreateProfileInput } from '../API';
import { generateClient } from 'aws-amplify/api';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

const client = generateClient();

export default function ProfileSetup({ children }: { children: React.ReactNode }) {
  const { user } = useAuthenticator();

  useEffect(() => {
    async function ensureProfile() {
      if (user) {
        const input: CreateProfileInput = {
          username: user.username,
          email: user.signInDetails?.loginId ?? '',
        };
        try {
          await client.graphql({
            query: createProfile,
            variables: { input }
          });
        } catch (error) {
          // Optionally handle error (e.g., profile already exists)
          // You can log or ignore duplicate errors
        }
      }
    }
    ensureProfile();
  }, [user]);

  return <>{children}</>;
}