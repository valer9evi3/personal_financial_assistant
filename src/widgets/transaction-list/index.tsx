'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';

export function TransactionList() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant='h5' component='h2'>
            Transactions
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
