import { Box } from '@chakra-ui/react';

import { Celebration } from './components/Celebration';
import { Footer } from './components/Footer';
import { GrabTicket } from './components/GrabTicket';
import { Logo } from './components/Logo';
import { Nav } from './components/Nav';
import { OurPartners } from './components/OurPartners';
import { Speakers } from './components/Speakers';
import { Sponsors } from './components/Sponsors';
import { Venue } from './components/Venue';

export const Component = () => (
  <Box
    color="white"
    backgroundColor="black"
    textAlign="center"
  >
    <Nav />
    <Logo />
    <Celebration />
    <GrabTicket />
    <Speakers />
    <Box background="#D9D9D9">
      <Sponsors />
      <OurPartners />
      <Venue />
    </Box>
    <Footer />
  </Box>
);

Component.displayName = 'MainRoute';
