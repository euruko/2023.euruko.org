import { Box } from '@chakra-ui/react';

import { CallCommunities } from './components/CallCommunities';
import { CallSpeakers } from './components/CallSpeakers';
import { CallSponsors } from './components/CallSponsors';
import { Celebration } from './components/Celebration';
import { Footer } from './components/Footer';
import { GrabTicket } from './components/GrabTicket';
import { HowWeCelebrating } from './components/HowWeCelebrating';
import { Logo } from './components/Logo';
import { MakeDifference } from './components/MakeDifference';
import { Nav } from './components/Nav';
import { NewExperience } from './components/NewExperience';
import { ReadyToJoin } from './components/ReadyToJoin';
import { StillInDoubt } from './components/StillInDoubt';
// import { WelcomeHome } from './components/WelcomeHome';

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
    <GrabTicket />
    <MakeDifference />
    <CallSpeakers />
    <CallSponsors />
    <CallCommunities />
    <ReadyToJoin />
    <StillInDoubt />
    {/* <WelcomeHome /> */}
    <HowWeCelebrating />
    <Footer />
  </Box>
);

Component.displayName = 'MainRoute';
