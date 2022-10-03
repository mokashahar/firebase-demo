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

import React, { useEffect, useState } from 'react';
import { Bus } from './types';
import { addBus, deleteBus, getAllBuses, listenBusses } from './BusesService';

type Props = {};

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));

const FireStore = (props: Props) => {
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    getAllBuses().then((data) => setBuses(data));
  }, []);

  useEffect(() => {
    const unsub = listenBusses((changes) => {
      getAllBuses().then((data) => setBuses(data));
      changes.forEach((change) => {
        const source = change.doc.metadata.hasPendingWrites ? 'Local' : 'Server';
        if (change.type === 'added') {
          console.log(source + ' New bus: ', change.doc.data());
        }
        if (change.type === 'modified') {
          console.log(source + ' Modified bus: ', change.doc.data());
        }
        if (change.type === 'removed') {
          console.log(source + ' Removed bus: ', change.doc.data());
        }
      });
    });
    return () => unsub();
  }, []);

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
        Buses List
      </Typography>
      <AddBusForm onAdd={(bus) => addBus(bus)} />
      <Demo>
        <List dense={true}>
          {buses.map((bus) => (
            <BusListItem key={bus.name} bus={bus} onDelete={(name) => deleteBus(name)} />
          ))}
        </List>
      </Demo>
    </>
  );
};

const AddBusForm = ({ onAdd }: { onAdd: (bus: Bus) => void }) => {
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

const BusListItem = ({ bus, onDelete }: { bus: Bus; onDelete: (name: string) => void }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => onDelete(bus.name)} edge='end' aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemAvatar>
        <Avatar>
          <DirectionsBusIcon color='primary' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={bus.name} secondary={bus.description} />
    </ListItem>
  );
};

export default FireStore;
