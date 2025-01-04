import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from '@mui/material';
//import { ShoppingBag, Coffee, Home } from 'lucide-react';

export const TransactionsList = () => {
  const transactions = [
    {
      id: 1,
      title: 'Groceries',
      amount: -120.5,
      category: 'Shopping',
      icon: null,
    },
    { id: 2, title: 'Coffee Shop', amount: -4.5, category: 'Food', icon: null },
    { id: 3, title: 'Rent', amount: -1200, category: 'Housing', icon: null },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Recent Transactions
        </Typography>
        <List>
          {transactions.map((transaction) => {
            // const Icon = transaction.icon;
            return (
              <ListItem key={transaction.id} divider>
                <ListItemIcon>{/* <Icon size={24} /> */}</ListItemIcon>
                <ListItemText
                  primary={transaction.title}
                  secondary={transaction.category}
                />
                <Typography
                  variant='body2'
                  color={transaction.amount < 0 ? 'error' : 'success.main'}
                >
                  ${Math.abs(transaction.amount).toFixed(2)}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};
