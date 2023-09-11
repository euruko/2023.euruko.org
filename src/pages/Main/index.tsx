import { Box } from '@chakra-ui/react';

// import { Accommodation } from './components/Accommodation';
// import { CallCommunities } from './components/CallCommunities';
// import { CallSpeakers } from './components/CallSpeakers';
import { CallSponsors } from './components/CallSponsors';
import { Celebration } from './components/Celebration';
import { Footer } from './components/Footer';
import { GrabTicket } from './components/GrabTicket';
import { HowWeCelebrating } from './components/HowWeCelebrating';
import { Logo } from './components/Logo';
// import { MakeDifference } from './components/MakeDifference';
import { Nav } from './components/Nav';
import { NewExperience } from './components/NewExperience';
import { OurPartners } from './components/OurPartners';
// import { ProgramCommittee } from './components/ProgramCommittee';
import { ReadyToJoin } from './components/ReadyToJoin';
import { Speakers } from './components/Speakers';
import { Sponsors } from './components/Sponsors';
import { StillInDoubt } from './components/StillInDoubt';
import { Venue } from './components/Venue';
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
    {/* <ProgramCommittee /> */}
    {/* <MakeDifference /> */}
    {/* <CallSpeakers /> */}
    <Speakers />
    <Box background="#D9D9D9">
      <CallSponsors />
      <Sponsors />
      <OurPartners />
    </Box>
    {/* <CallCommunities /> */}
    {/* <WelcomeHome /> */}
    <Box background="#D9D9D9">
      <ReadyToJoin />
      <StillInDoubt />
      <Venue />
      {/* <Accommodation /> */}
    </Box>
    <HowWeCelebrating />
    <Footer />
  </Box>
);

Component.displayName = 'MainRoute';
