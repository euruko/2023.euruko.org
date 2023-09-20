import { Box, Flex, Heading, Img, Text, useMediaQuery } from '@chakra-ui/react';

import { Button } from './common/Button';
import GitButler_Route from '../assets/GitButler_Route.svg';
import GitButler_Route_mobile from '../assets/GitButler_Route_mobile.svg';
import Town_Hall_Route from '../assets/Town_Hall_Route.svg';
import Town_Hall_Route_mobile from '../assets/Town_Hall_Route_mobile.svg';

export const YellowSection = () => {
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  return (
    <Box
      color="white"
      backgroundColor="#DFAF36"
      textAlign="center"
    >
      <Flex
        maxW="1540px"
        p={{
          base: '40px 30px',
          md: '80px 30px',
          lg: '120px 30px'
        }}
        margin="auto"
        flexDirection="column"
      >
        <Flex
          flexDirection="column"
          m="auto"
          gap={{
            base: '40px',
            md: '80px',
            lg: '90px'
          }}
        >
          <Heading
            color="black"
            variant="regularHeading"
            m="0 auto"
            fontSize={{
              base: '40px',
              md: '80px',
              lg: '120px'
            }}
            fontWeight={600}
            lineHeight="90%"
            letterSpacing="-0.06em"
            maxW={{ base: '275px', sm: '330px', md: '615px', lg: '970px' }}
          >
            What is the route for pub crawling?
          </Heading>
          <Text
            m="0 auto"
            color="#000"
            fontSize={{
              base: '14px',
              sm: '20px',
              md: '40px'
            }}
            fontWeight={500}
            lineHeight="120%"
            letterSpacing="-0.8px"
            maxW={{
              base: '80%',
              md: '1267px'
            }}
            marginBottom={{ base: '20px', md: '30px' }}
          >
            We&apos;ve mapped out a route through the best and most unique
            places in Vilnius that truly represent the city&apos;s character. We
            ourselves drank not a single glass at these places. Now we are
            sharing them with you. At the same time, you will take a walk
            through the most interesting places in the Old City, which has been
            waiting for you for 700 years.
          </Text>
          <Flex
            gap="60px"
            flexDirection={{
              base: 'column',
              lg: 'row'
            }}
          >
            <Flex
              flex="1"
              flexDirection="column"
              gap={{
                base: '20px',
                lg: '60px'
              }}
            >
              <Box>
                <Text
                  color="#000"
                  fontSize={{
                    base: '26px',
                    md: '40px'
                  }}
                  fontWeight={700}
                  lineHeight="120%"
                  letterSpacing="-0.8px"
                  marginBottom={{
                    base: '20px',
                    lg: '30px'
                  }}
                >
                  GitButler Route
                </Text>
                <Button
                  ariaLabel="Button for  open GitButler Route in google maps"
                  link="https://goo.gl/maps/hPoro2pbT55Hv8tz8"
                />
              </Box>
              <Flex
                flex="1"
                alignSelf="center"
              >
                <Img
                  src={
                    isLargerThan400 ? GitButler_Route_mobile : GitButler_Route
                  }
                />
              </Flex>
            </Flex>
            <Flex
              flex="1"
              flexDirection="column"
              gap={{
                base: '20px',
                lg: '60px'
              }}
            >
              <Box>
                <Text
                  color="#000"
                  fontSize={{
                    base: '26px',
                    md: '40px'
                  }}
                  fontWeight={700}
                  lineHeight="120%"
                  letterSpacing="-0.8px"
                  marginBottom={{
                    base: '20px',
                    lg: '30px'
                  }}
                >
                  Town Hall Route
                </Text>
                <Button
                  ariaLabel="Button for  open Town Hall Route in google maps"
                  link="https://goo.gl/maps/SVLMWKQMonWUwxVEA"
                />
              </Box>
              <Flex
                flex="1"
                alignSelf="center"
              >
                <Img
                  src={
                    isLargerThan400 ? Town_Hall_Route_mobile : Town_Hall_Route
                  }
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
