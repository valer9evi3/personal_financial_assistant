'use client';

import { Dashboard } from '@/pages/dashboard';
import { Header } from '@/widgets/Header';
import { Container, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component='main' sx={{ flex: 1, py: 4 }}>
        <Dashboard />
      </Container>
    </Box>
  );
}
