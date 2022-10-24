import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import FireStore from './features/FireStore/FireStore';
import Auth from './features/Auth/Auth';
import './services/firebase/firebase';
import RemoteConfig from './features/RemoteConfig/RemoteConfig';
import Messaging from './features/Messaging/Messaging';

function App() {
  const [view, setView] = useState<string>();

  return (
    <Box width='100%' height='100%' position='relative'>
      <Stack direction='row' justifyContent='center' alignItems='center' paddingTop='5px'>
        <ButtonGroup variant='contained'>
          <Button onClick={() => setView('1')}>Fire Store DB</Button>
          <Button onClick={() => setView('2')}>Auth</Button>
          <Button onClick={() => setView('3')}>Remote Config</Button>
          <Button onClick={() => setView('4')}>Messaging</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='column' justifyContent='center' alignItems='center' paddingTop='100px'>
        {view === '1' && <FireStore />}
        {view === '2' && <Auth />}
        {view === '3' && <RemoteConfig />}
        {view === '4' && <Messaging />}
      </Stack>
    </Box>
  );
}

export default App;
