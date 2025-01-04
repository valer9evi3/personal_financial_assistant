import { Card, CardContent, Typography, Box } from '@mui/material';
//import { TrendingUp, TrendingDown } from 'lucide-react';

export const BalanceCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Current Balance
        </Typography>
        <Typography variant='h4' sx={{ mb: 2 }}>
          $5,240.00
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'success.main',
            }}
          >
            {/* <TrendingUp size={20} /> */}
            <Typography variant='body2' sx={{ ml: 1 }}>
              Income: $8,320
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}
          >
            {/* <TrendingDown size={20} /> */}
            <Typography variant='body2' sx={{ ml: 1 }}>
              Expenses: $3,080
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
