'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
//import { Plus } from 'lucide-react';
import { TransactionsList } from '../../pages/dashboard/ui/TransactionsList';
import { TransactionForm } from '../../features/transactions/ui/TransactionForm';

export const TransactionsWidget = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant='h6'>Transactions</Typography>
          <Button
            variant='contained'
            //startIcon={<Plus size={20} />}
            onClick={() => setIsFormOpen(true)}
          >
            Add Transaction
          </Button>
        </Box>
        <TransactionsList />
        <TransactionForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      </CardContent>
    </Card>
  );
};
