'use client';

import { Container, Box } from '@mui/material';
import { DashboardWidget } from '@/widgets/dashboard';
import { TransactionList } from '@/widgets/transaction-list';
import { FinancialCalculator } from '@/widgets/calculator';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <DashboardWidget />
        <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}>
          <TransactionList />
          <FinancialCalculator />
        </Box>
      </Box>
    </Container>
  );
}