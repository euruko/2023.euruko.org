import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import map from './assets/map.png';
import map_legend from './assets/map_legend.svg';
import map_mobile from './assets/map_mobile.png';

export const Venue = () => {
  const [isLargerThan1500] = useMediaQuery('(max-width: 1500px)');
  const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');

  return (
    <Box backgroundColor="#D9D9D9">
      <Flex
        maxW="1520px"
        margin="0px auto"
        justifyContent="center"
        gap={isLargerThan850 ? '30px' : '60px'}
        alignItems="center"
        flexDirection="column"
        wrap="nowrap"
      >
        <Heading
          variant="regularHeading"
          fontSize={{
            base: '90px',
            md: '180px',
            lg: '361px'
          }}
          fontWeight={600}
          color="#000"
          textTransform="none"
        >
          Venue
        </Heading>
        <Flex
          flexDirection="column"
          w="full"
          m="0 auto"
        >
          <Heading
            variant="regularHeading"
            fontSize={{
              base: '26px',
              md: '45px',
              lg: '80px'
            }}
            fontWeight={500}
            m="0 auto"
            lineHeight="100%"
            color="#000"
            textTransform="none"
          >
            Location and address
          </Heading>
          <Text
            fontWeight={500}
            color="#000"
            fontSize={{
              base: '15px',
              md: '35px'
            }}
            lineHeight="120%"
            maxW="1120px"
            margin={{
              base: '30px auto 0 auto',
              md: '60px auto 0 auto'
            }}
          >
            Vilnius Gediminas Technical University,
            <br /> Saulėtekio al. 11, 10223, Vilnius
          </Text>
          <Link
            mt={{
              base: '20px',
              md: '40px'
            }}
            href="https://www.google.com/maps/place/Vilnius+Gediminas+Technical+University+(VILNIUS+TECH)/@54.7226447,25.3352698,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd96e86a61f053:0xd4bb20eab67f9bf9!8m2!3d54.7226447!4d25.3378447!16zL20vMDNiMzB3?entry=ttu"
            target="_blank"
          >
            <Button
              w="231px"
              padding={isLargerThan850 ? '10px' : '25px'}
              background="#2BBA7E"
              variant="whiteButton"
              borderRadius="45px"
              fontSize={{
                base: '18px',
                md: '21px'
              }}
              aria-label="Button for redirecting to the geolocation of Vilnius Gediminas Technical University in google map"
            >
              open in maps
            </Button>
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          m="30px auto"
          w={isLargerThan1200 ? '90%' : '100%'}
        >
          <Img
            src={isLargerThan850 ? map_mobile : map}
            w={isLargerThan850 ? '100%' : '95%'}
          />
          <Img
            mt="20px"
            display={isLargerThan850 ? 'block' : 'none'}
            src={map_legend}
            w="full"
          />
        </Flex>
        <Box
          w="full"
          backgroundColor="#D9D9D9"
          padding={
            isLargerThan850 ? '0px 10px 60px 10px' : '0px 10px 120px 10px'
          }
        >
          <Flex
            maxW="1520px"
            margin="auto"
            p={isLargerThan850 ? '30px' : '60px 110px'}
            alignItems="center"
            backgroundColor="black"
            borderRadius="45px"
            flexDirection="column"
          >
            <Flex
              w="100%"
              justifyContent="center"
              gap={isLargerThan1500 ? '20px' : '150px'}
              flexDirection={isLargerThan1200 ? 'column' : 'row'}
            >
              <Flex
                flexDirection="column"
                gap={isLargerThan850 ? '20px' : '50px'}
                maxWidth="619px"
                m="0 auto"
              >
                <Text
                  fontWeight={500}
                  color="#D9D9D9"
                  fontSize={{
                    base: '14px',
                    sm: '21px',
                    md: '30px'
                  }}
                  lineHeight="120%"
                  maxW="1006px"
                  margin="0 auto 10px auto"
                >
                  You have several options for reaching the Venue, including
                  organized transfers, taxi services, or public transportation.
                </Text>
                <Text
                  fontWeight={500}
                  color="#D9D9D9"
                  fontSize={{
                    base: '14px',
                    sm: '21px',
                    md: '30px'
                  }}
                  lineHeight="120%"
                  maxW="1006px"
                  margin="0 auto 10px auto"
                >
                  We&apos;ve provided a guide with route descriptions and
                  additional tips to enhance your comfort during your stay in
                  Vilnius
                </Text>
              </Flex>
              <Button
                alignSelf="center"
                maxWidth="500px"
                height="120px"
                width="100%"
                background="#2BBA7E"
                variant="whiteButton"
                mb="10px"
                fontSize={isLargerThan850 ? '28px' : '32px'}
                as={Link}
                // href="#"
                // target="_blank"
                aria-label="Button for redirecting to the geolocation of Vilnius Gediminas Technical University in google map"
                cursor="not-allowed"
                opacity={0.5}
              >
                {/* open euruko map */}
                Map TBA soon
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
