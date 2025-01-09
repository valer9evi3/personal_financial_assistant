import Grid from '@mui/material/Grid2';
import { BalanceCard } from './ui/BalanceCard';
import { ExpenseChart } from './ui/ExpenseChart';
import { TransactionsWidget } from '../../widgets/TransactionsWidget';
import { CategoriesWidget } from '../../widgets/CategoriesWidget';

export const Dashboard = () => {
  return (
    <Grid container spacing={1} maxHeight={'calc(100vh - 64px)'}>
      <Grid size={4}>
        <BalanceCard />
      </Grid>
      <Grid size={4}>
        <BalanceCard />
      </Grid>
      <Grid size={4}>
        <BalanceCard />
      </Grid>
      <Grid size={12}>
        <TransactionsWidget />
      </Grid>
      <Grid size={12}>
        <ExpenseChart />
      </Grid>
    </Grid>
  );
};
