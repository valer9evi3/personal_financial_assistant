'use client';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SUPPORTED_CURRENCIES, type CurrencyCode } from '@/shared/config/currencies';
import { useSettings } from '@/shared/hooks/use-settings';

export function CurrencySelector() {
  const { currency, setCurrency } = useSettings();

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        label="Currency"
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
      >
        {Object.entries(SUPPORTED_CURRENCIES).map(([code, curr]) => (
          <MenuItem key={code} value={code}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{curr.symbol}</span>
              <span>{curr.name}</span>
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}