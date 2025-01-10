'use client';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { MySelectProps } from './model';
import { useSx } from '@/shared/hooks/useSx';
import { select, option } from './styles';

export function MySelect(props: MySelectProps & SelectProps) {
  const { options, label } = props;

  const styleSelect = useSx(select);
  const styleOption = useSx(option);

  return (
    <FormControl
      fullWidth={props.fullWidth}
      required={props.required}
      sx={styleSelect}
    >
      <InputLabel>{label}</InputLabel>
      <Select {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={styleOption}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
