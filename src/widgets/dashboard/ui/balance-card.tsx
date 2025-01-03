'use client';

import { Card, CardContent, Box, Typography } from '@mui/material';
import { AccountBalance } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from '@/entities/transaction';
import { useSettings } from '@/shared/hooks/use-settings';
import { formatCurrency } from '@/shared/lib/format';

export function BalanceCard() {
  const balance = useSelector(selectTotalBalance);
  const { currency, language } = useSettings();

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AccountBalance color="primary" sx={{ fontSize: 40 }} />
          <Box>
            <Typography color="text.secondary" variant="body2">
              Total Balance
            </Typography>
            <Typography variant="h5" component="div">
              {formatCurrency(balance, currency, language)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}