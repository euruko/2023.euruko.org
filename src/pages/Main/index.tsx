import { Box } from '@chakra-ui/react';

import { Celebration } from './components/Celebration';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Nav } from './components/Nav';
import { NewExperience } from './components/NewExperience';
import { Organiser } from './components/Organiser';
import { OurPartners } from './components/OurPartners';
import { Speakers } from './components/Speakers';
import { Sponsors } from './components/Sponsors';

export const Component = () => (
  <Box
    color="white"
    backgroundColor="black"
    textAlign="center"
  >
    <Nav />
    <Logo />
    <NewExperience />
    <Celebration />
    <Speakers />
    <Box background="#D9D9D9">
      <Sponsors />
      <OurPartners />
      <Organiser />
    </Box>
    <Footer />
  </Box>
);

Component.displayName = 'MainRoute';
