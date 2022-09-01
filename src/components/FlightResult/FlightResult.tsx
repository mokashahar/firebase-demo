import React from 'react';
import { Avatar, Box, Button, Card, Stack, Typography } from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

type Props = {};

const FlightResult = (props: Props) => {
  return (
    <Card variant='outlined' sx={{ width: '250px', height: 'max-content' }}>
      <Box padding='5px'>
        <Stack paddingBottom='10px' alignItems='center' direction='row' spacing={3}>
          <Avatar>
            <AirplaneTicketIcon />
          </Avatar>
          <Typography variant='subtitle2'>Price: 100$</Typography>
        </Stack>
        <Stack justifyContent='flex-start' alignItems='flex-start' spacing={1}>
          <Typography variant='body2'>Date 05/09/2022 - 10/09/2022</Typography>
          <Typography variant='body2'>Out: 16:00</Typography>
          <Typography variant='body2'>Back: 17:00</Typography>
        </Stack>
        <Box>
          <Button>Open</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default FlightResult;
