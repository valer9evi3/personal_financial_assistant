import type { Preview } from '@storybook/react';
import { Roboto } from 'next/font/google';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '../src/app/theme';
import React from 'react';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

const preview: Preview = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/app/',
      },
    },
    actions: {},
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        light: theme,
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className={roboto.variable}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
