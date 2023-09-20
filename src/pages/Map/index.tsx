import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { BlueSection } from './components/BlueSection';
import { PinkSection } from './components/PinkSection';
import { YellowSection } from './components/YellowSection';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box
      color="white"
      backgroundColor="#000"
      textAlign="center"
    >
      <Nav />
      <PinkSection />
      <BlueSection />
      <YellowSection />
    </Box>
  );
};

Component.displayName = 'MapRoute';
