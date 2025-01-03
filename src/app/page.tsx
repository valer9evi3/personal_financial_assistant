'use client';

import { Container, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          }}
        ></Box>
      </Box>
    </Container>
  );
}
