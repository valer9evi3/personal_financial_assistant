'use client';

import { Box, Typography, Grid } from '@mui/material';
import { BalanceCard } from './ui/balance-card';
import { ExpenseChart } from './ui/expense-chart';
import { IncomeChart } from './ui/income-chart';

export function DashboardWidget() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Financial Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <BalanceCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExpenseChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <IncomeChart />
        </Grid>
      </Grid>
    </Box>
  );
}