import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  TextField,
  Typography
} from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DeleteIcon from '@mui/icons-material/Delete';

import React, { useState } from 'react';

type Props = {};

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));

const FireStore = (props: Props) => {
  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
        Buses List
      </Typography>
      <AddBusForm onAdd={(bus) => alert(JSON.stringify(bus))} />
      <Demo>
        <List dense={true}>
          <BusListItem />
        </List>
      </Demo>
    </>
  );
};

const AddBusForm = ({ onAdd }: { onAdd: (bus: { name: string; description: string }) => void }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <Stack spacing='5px' direction='row' paddingBottom='10px'>
      <TextField onChange={(e) => setName(e.target.value)} id='name' label='Name' variant='outlined' size={'small'} />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        id='desc'
        label='Description'
        variant='outlined'
        size={'small'}
      />
      <Button variant='outlined' onClick={() => name && description && onAdd({ name, description })}>
        Add Bus
      </Button>
    </Stack>
  );
};

const BusListItem = () => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge='end' aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemAvatar>
        <Avatar>
          <DirectionsBusIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary='Bus X' secondary={'Great bus'} />
    </ListItem>
  );
};

export default FireStore;
