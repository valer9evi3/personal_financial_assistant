'use client';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { MySelectProps } from './model';

export function MySelect(props: MySelectProps) {
  const { value, onChange, options, label } = props;

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{option.label}</span>
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
