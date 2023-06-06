import { Box, Flex, Heading, Img, Text, useMediaQuery } from '@chakra-ui/react';

import tower from './assets/tower.png';

export const Celebration = () => {
  const [isLargerThan800] = useMediaQuery('(max-width: 800px)');
  const [isLargerThan540] = useMediaQuery('(max-width: 540px)');

  return (
    <Box
      maxW="1540px"
      margin="auto"
      p="0 10px"
    >
      <Box
        border="1px solid #D9D9D9"
        borderRadius="45px"
        mt="20px"
        width="100%"
        zIndex={12}
        position="relative"
        color="#D9D9D9"
      >
        <Heading
          variant="regularHeading"
          fontSize="42px"
          maxW="300px"
          m="75px auto 60px auto"
        >
          Triple celebration
        </Heading>
        <Flex
          justifyContent="space-around"
          flexWrap="wrap"
          gap={isLargerThan540 ? '50px' : undefined}
          _before={
            isLargerThan540
              ? {
                  content: `''`,
                  display: 'block',
                  width: '1px',
                  height: '500px',
                  backgroundColor: '#D9D9D9',
                  position: 'absolute',
                  marginTop: '100px'
                }
              : undefined
          }
          _after={
            isLargerThan800
              ? undefined
              : {
                  content: `''`,
                  display: 'block',
                  width: '700px',
                  height: '1px',
                  backgroundColor: '#D9D9D9',
                  position: 'absolute',
                  marginTop: '70px',
                  marginLeft: '0px'
                }
          }
        >
          <Box
            maxW="250px"
            padding={isLargerThan540 ? '10px 0' : undefined}
            backgroundColor="black"
            zIndex={99}
          >
            <Text
              fontSize="84px"
              fontWeight={600}
              lineHeight="70%"
              letterSpacing="-0.06em"
            >
              20 years
            </Text>
            <Text
              mt="10px"
              variant="regularText"
              fontSize="21px"
            >
              of Euruko
            </Text>
          </Box>
          <Box
            maxW="250px"
            padding={isLargerThan540 ? '10px 0' : undefined}
            backgroundColor="black"
            zIndex={99}
          >
            <Text
              fontSize="84px"
              fontWeight={600}
              lineHeight="70%"
              letterSpacing="-0.06em"
            >
              30 years
            </Text>
            <Text
              mt="10px"
              variant="regularText"
              fontSize="21px"
            >
              of Ruby
            </Text>
          </Box>
          <Box
            maxW="250px"
            padding={isLargerThan540 ? '10px 0' : undefined}
            backgroundColor="black"
            zIndex={99}
          >
            <Text
              fontSize="84px"
              fontWeight={600}
              lineHeight="70%"
              letterSpacing="-0.06em"
            >
              700 years
            </Text>
            <Text
              mt="10px"
              variant="regularText"
              fontSize="21px"
            >
              of Vilnius
            </Text>
          </Box>
        </Flex>
        <Text
          variant="regularText"
          fontSize="42px"
          m="auto"
          mt="55px"
          mb="75px"
          maxW="550px"
          letterSpacing="-0.04em"
          fontWeight={500}
          lineHeight="90%"
        >
          We definitely have something to celebrate!
        </Text>
      </Box>
      <Flex
        alignItems="center"
        flexDirection="column"
        pt="110px"
        pb="110px"
        color="#D9D9D9"
      >
        <Heading
          variant="regularHeading"
          fontSize={isLargerThan540 ? '50px' : '84px'}
          fontWeight={600}
          zIndex={11}
        >
          Vilnius
        </Heading>
        <Heading
          variant="regularHeading"
          fontSize={isLargerThan540 ? '50px' : '84px'}
          fontWeight={600}
          zIndex={9}
          mt="-10px"
        >
          Lithuania
        </Heading>
        <Img
          src={tower}
          position="absolute"
          transform={
            isLargerThan540 ? 'translateY(-155px)' : 'translateY(-285px)'
          }
          alt="Vilnuis tower"
          zIndex={10}
        />
        <Heading
          mt={isLargerThan540 ? '365px' : '265px'}
          variant="regularHeading"
          fontSize={isLargerThan540 ? '42px' : '84px'}
          fontWeight={600}
          zIndex={99}
        >
          21 — 23
        </Heading>
        <Heading
          variant="regularHeading"
          fontSize={isLargerThan540 ? '42px' : '84px'}
          fontWeight={600}
          zIndex={99}
        >
          September
        </Heading>
      </Flex>
    </Box>
  );
};
