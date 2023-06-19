import { Flex, Heading, Center, useMediaQuery } from '@chakra-ui/react';

import euruko_logo_mp4 from './assets/euruko_logo_solid.mp4';
import poster from './assets/poster.png';

export const Logo = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');
  const [isLargerThan550] = useMediaQuery('(max-width: 550px)');

  return (
    <>
      <Flex
        justifyContent="center"
        mb={isLargerThan550 ? '0px' : '-70px'}
        mt={isLargerThan550 ? '50px' : '50px'}
      >
        <video
          muted
          loop
          autoPlay
          poster={poster}
          aria-label="An animated Euruko logo that goes through the teleport multiple times and changes its visual style each time
          "
        >
          <source
            src={euruko_logo_mp4}
            type="video/mp4"
          />
          <track label="Euruko 2023" />
        </video>
      </Flex>

      <Center>
        <Heading
          as="h1"
          zIndex={1}
          maxWidth="600px"
          mb={isLargerThan750 ? '55px' : '235px'}
          variant="regularHeading"
          fontSize="43px"
          p="0 10px"
          color="#D9D9D9"
        >
          Join Euruko and make it ruby-doo-bee-doo!
        </Heading>
      </Center>
    </>
  );
};
