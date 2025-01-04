'use client';

import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
//import { Wallet } from 'lucide-react';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
          {/* <Wallet /> */}
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Financial Assistant
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
