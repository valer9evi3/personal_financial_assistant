import { Grid } from '@mui/material';
import { BalanceCard } from './ui/BalanceCard';
import { ExpenseChart } from './ui/ExpenseChart';
import { TransactionsWidget } from '../../widgets/TransactionsWidget';
import { CategoriesWidget } from '../../widgets/CategoriesWidget';

export const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <BalanceCard />
      </Grid>
      <Grid item xs={12} md={8}>
        <ExpenseChart />
      </Grid>
      <Grid item xs={12} md={8}>
        <TransactionsWidget />
      </Grid>
      <Grid item xs={12} md={4}>
        <CategoriesWidget />
      </Grid>
    </Grid>
  );
};