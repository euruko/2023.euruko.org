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
