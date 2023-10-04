import { Box, Flex, Heading, Img, Link, useMediaQuery } from '@chakra-ui/react';

import cyberGizerLogo from './cybergizer.svg';

export const Organiser = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Box
      id="organiser"
      backgroundColor="#D9D9D9"
      pb={isLargerThan750 ? '60px' : '120px'}
      pt={isLargerThan750 ? '60px' : '120px'}
    >
      <Flex
        maxW="1540px"
        margin="auto"
        p="0 10px"
      >
        <Flex
          width="100%"
          alignItems="flex-start"
          borderRadius="80px"
          border="1px solid #000"
          justifyContent="space-around"
          flexWrap="wrap"
          padding="0 40px"
        >
          <Heading
            variant="regularHeading"
            fontSize={isLargerThan750 ? '45px' : '80px'}
            margin={isLargerThan750 ? '45px' : '60px auto'}
            fontWeight={600}
            maxWidth="900px"
            color="#000"
            textTransform="none"
          >
            Organiser
          </Heading>
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            marginBottom="60px"
          >
            <Box>
              <Link
                href="https://cybergizer.com"
                target="_blank"
              >
                <Img
                  m="auto"
                  h={{
                    base: '30px',
                    sm: '80px',
                    lg: '100px'
                  }}
                  my={{
                    base: '20px',
                    lg: '40px'
                  }}
                  src={cyberGizerLogo}
                  alt="CyberGizer logo"
                />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
