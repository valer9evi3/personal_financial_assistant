import type { Preview } from '@storybook/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '../src/app/theme';

const preview: Preview = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/app/',
      },
    },
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
  ],
};

export default preview;
