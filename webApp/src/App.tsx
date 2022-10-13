import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import FireStore from './features/FireStore/FireStore';
import Auth from './features/Auth/Auth';
import './services/firebase/firebase';

function App() {
  const [view, setView] = useState<string>();
  //console.log('VALUE: ', getValue(remoteConfig, 'MaxLimit').asString());

  return (
    <Box width='100%' height='100%' position='relative'>
      <Stack direction='row' justifyContent='center' alignItems='center' paddingTop='5px'>
        <ButtonGroup variant='contained'>
          <Button onClick={() => setView('1')}>Fire Store DB</Button>
          <Button onClick={() => setView('2')}>Auth</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='column' justifyContent='center' alignItems='center' paddingTop='100px'>
        {view === '1' && <FireStore />}
        {view === '2' && <Auth />}
      </Stack>
    </Box>
  );
}

export default App;
