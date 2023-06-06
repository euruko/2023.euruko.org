import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { Speakers } from './components/Speakers';
import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box
      color="white"
      backgroundColor="black"
      textAlign="center"
    >
      <Nav />
      <Speakers />
      <Footer />
    </Box>
  );
};

Component.displayName = 'SpeakersRoute';
