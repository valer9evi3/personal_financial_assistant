'use client';

import {
  FormControl,
  InputLabel,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { MyInputProps } from './model';
import { useSx } from '@/shared/hooks/useSx';
import { input } from './styles';

export function MyInput(props: MyInputProps & TextFieldProps) {
  const { label, ...textFieldProps } = props;

  const styleInput = useSx(input);

  return (
    <TextField
      {...textFieldProps}
      sx={styleInput}
      variant='outlined'
      label={label}
    />
  );
}
