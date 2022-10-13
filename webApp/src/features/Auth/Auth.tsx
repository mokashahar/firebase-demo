import React, { useEffect, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';
import { auth } from '../../services/firebase/firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import User = firebase.User;

type Props = {};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: function () {
      return false;
    }
  },
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ]
};
const Auth = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // @ts-ignore
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Box marginBottom='10px'>
        <Paper>
          <Box padding={3}>
            <StyledFirebaseAuth uiConfig={uiConfig as any} firebaseAuth={auth} />
          </Box>
        </Paper>
      </Box>

      {user && (
        <>
          <Box>Hello {user.displayName}</Box>
          <Box>{user.email}</Box>
          {user.photoURL && (
            <Box>
              <img width='100%' height='100%' src={user.photoURL} />
            </Box>
          )}
          <Button onClick={() => signOut(auth)}>Sign out</Button>
        </>
      )}
    </>
  );
};

export default Auth;
