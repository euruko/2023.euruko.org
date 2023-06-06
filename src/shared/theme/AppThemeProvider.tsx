import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;
