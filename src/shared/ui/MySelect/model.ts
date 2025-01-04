import { SelectChangeEvent } from '@mui/material';

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
