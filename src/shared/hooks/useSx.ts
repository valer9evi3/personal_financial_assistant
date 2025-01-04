import { useMemo } from 'react';

import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const useSx = (
  className: SxProps,
  ...styleProps: SxProps[]
): SxProps<Theme> => {
  return useMemo(() => {
    return {
      ...className,
      ...Object.assign({}, ...styleProps),
    };
  }, [className, styleProps]);
};
