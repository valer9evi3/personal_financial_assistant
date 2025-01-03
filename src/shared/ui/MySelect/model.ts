import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface MySelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  label?: string;
  options: Option[];
}
