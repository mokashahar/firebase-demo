import React, { useEffect, useState } from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from '../../services/firebase/firebase';
import { Box, TextField } from '@mui/material';

type Props = {};

const Messaging = (props: Props) => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    getToken(messaging, {
      vapidKey: 'BCiB9kY70FFv2xE2hiHoJlEUYSsCvNYzqcH_Z11z1m7nSar2BaOB77z7JNCfx3mB7wCwpibT9yoZAFZhAgLXNns'
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log('GOT TOKEN:', currentToken);
          setToken(currentToken);
          // Send the token to your server and update the UI if necessary
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }, []);

  return (
    <div>
      <Box>
        <TextField id='outlined-multiline-static' label='Firebase Token' multiline rows={4} value={token} />
      </Box>
    </div>
  );
};

export default Messaging;
