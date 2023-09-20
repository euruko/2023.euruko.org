import {
  Box,
  Flex,
  Heading,
  Img,
  Link,
  Text,
  useMediaQuery,
  Button as ChakraButton
} from '@chakra-ui/react';

import { Button } from './common/Button';
import map_to_euruko from '../assets/map_blue_section.svg';
import map_to_euruko_mob from '../assets/map_mobile_blue_section.svg';

export const BlueSection = () => {
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  return (
    <Box
      color="white"
      backgroundColor="#0A9CDC"
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
          w="full"
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
            How do I get to the party?
          </Heading>
          <Flex
            w="full"
            margin="auto"
          >
            <Flex
              gap={{
                base: '30px',
                md: '60px'
              }}
              width="100%"
              flexDirection="column"
              alignItems="center"
              borderRadius={{
                base: '20px',
                md: '80px'
              }}
              padding={{
                base: '36px 16px',
                sm: '36px auto',
                md: '60px auto'
              }}
              backgroundColor="#D9D9D9"
              m={{
                base: '40px auto',
                md: '60px auto 90px auto'
              }}
            >
              <Flex
                w="full"
                flexDirection="column"
                flex="1"
              >
                <Heading
                  variant="regularHeading"
                  fontSize={{
                    base: '26px',
                    md: '42px'
                  }}
                  fontWeight={500}
                  m="0 auto"
                  lineHeight="100%"
                  color="#000"
                  textTransform="uppercase"
                >
                  Address
                </Heading>
                <Text
                  fontWeight={500}
                  color="#000"
                  fontSize={{
                    base: '14px',
                    md: '30px',
                    lg: '38px'
                  }}
                  lineHeight="120%"
                  maxW="1120px"
                  margin={{
                    base: '20px auto',
                    md: '40px auto'
                  }}
                >
                  Dūmų fabrikas <br /> Dūmų gatvė 5, 11119 Vilnius
                </Text>
                <Link
                  href="https://maps.app.goo.gl/ahpbQ63NLE84aRkn9"
                  target="_blank"
                >
                  <ChakraButton
                    w={{
                      base: '144px',
                      md: '231px'
                    }}
                    padding={isLargerThan850 ? '10px' : '25px'}
                    background="#2BBA7E"
                    variant="whiteButton"
                    borderRadius={{
                      base: '15px',
                      md: '45px'
                    }}
                    fontSize={{
                      base: '14px',
                      md: '21px'
                    }}
                    aria-label="Button for redirecting to the geolocation of Vilnius Gediminas Technical University in google map"
                  >
                    open in maps
                  </ChakraButton>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="full"
          flexDirection="column"
          m="auto"
        >
          <Flex
            w="full"
            alignItems="center"
            flexDirection="column"
            paddingBottom={{
              base: '40px',
              lg: '0'
            }}
          >
            <Flex
              flex="1"
              flexDirection="column"
              justifyContent="center"
              padding={{
                base: '0 0 30px 0',
                lg: '0 0 90px 0'
              }}
              gap={{
                base: '30px',
                lg: '90px'
              }}
            >
              <Text
                color="#000"
                fontSize={{
                  base: '14px',
                  sm: '20px',
                  md: '40px'
                }}
                fontWeight={700}
                lineHeight="120%"
                letterSpacing="-0.8px"
              >
                18:50
              </Text>
              <Flex flexDirection="column">
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
                    base: '240px',
                    md: '550px'
                  }}
                  marginBottom={{ base: '20px', md: '30px' }}
                >
                  Vilnius Railway Station Geležinkelio g. 16, 02100 Vilnius
                </Text>
                <Button
                  ariaLabel="Button for redirecting to the geolocation of Vilnius Railway Station in google map"
                  link="https://maps.app.goo.gl/FnujYyzYT6FpVJKR6"
                />
              </Flex>
            </Flex>
            <Flex
              flex="1"
              alignSelf="center"
            >
              <Img src={isLargerThan400 ? map_to_euruko_mob : map_to_euruko} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
