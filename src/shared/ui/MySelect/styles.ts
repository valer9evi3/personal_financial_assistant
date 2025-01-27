import { SxProps } from '@mui/material';

export const classNames: Record<string, SxProps> = {
  select: {
    minWidth: '180px',
    margin: '8px 0',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export const { select, option } = classNames;
