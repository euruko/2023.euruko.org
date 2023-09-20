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

import { AppDownloadSection } from './common/AppDownloadSection';
import { Button } from './common/Button';
import apple from '../assets/apple.svg';
import apple_mob from '../assets/apple_mobile.svg';
import google from '../assets/google.svg';
import google_mob from '../assets/google_mobile.svg';
import map_to_euruko from '../assets/map_to_euruko.svg';
import map_to_euruko_mob from '../assets/map_to_euruko_mobile.svg';

export const PinkSection = () => {
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  return (
    <Box
      color="white"
      backgroundColor="#FF74BD"
      textAlign="center"
    >
      <Flex
        maxW="1540px"
        p={{
          base: '120px 30px 40px 30px',
          md: '160px 30px 80px 30px',
          lg: '200px 30px 120px 30px'
        }}
        margin="auto"
        flexDirection="column"
      >
        <Flex
          w="full"
          flexDirection="column"
          m="auto"
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
            How do I get to the Venue?
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
                md: '71px auto '
              }}
              backgroundColor="#D9D9D9"
              m={{
                base: '40px auto',
                md: '60px auto 90px auto'
              }}
            >
              <Box>
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
                  Vilnius Gediminas Technical University,
                  <br /> Saulėtekio al. 11, 10223, Vilnius
                </Text>
                <Link
                  href="https://goo.gl/maps/ufWhTVQat7XSGqDp7"
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
              </Box>
              <Flex
                m="0 auto"
                gap={{
                  base: '30px',
                  md: '40px'
                }}
                w="100%"
                flexDirection={{
                  base: 'column',
                  lg: 'row'
                }}
              >
                <AppDownloadSection
                  linkForGoogle="https://play.google.com/store/apps/details?id=ee.mtakso.client&pcampaignid=web_share"
                  imgForGoogle={isLargerThan850 ? google_mob : google}
                  ariaLabelForGoogle="Link to redirect to download the Bolt app from the Play Store"
                  linkForApple="https://apps.apple.com/ee/app/bolt-request-a-ride/id675033630"
                  imgForApple={isLargerThan850 ? apple_mob : apple}
                  ariaLabelForApple="Link to redirect to download the Bolt app from the App Store"
                  title="Install Bolt taxi app"
                  widthForTitle="230px"
                />
                <Box
                  borderLeft="1px solid #000"
                  width="1px"
                  height="100%"
                  display={{
                    base: 'none',
                    lg: 'block'
                  }}
                />
                <AppDownloadSection
                  linkForGoogle="https://play.google.com/store/apps/details?id=com.trafi.android.tr&pcampaignid=web_share"
                  imgForGoogle={isLargerThan850 ? google_mob : google}
                  ariaLabelForGoogle="Link to redirect to download the Trafi app from the Play Store"
                  linkForApple="https://apps.apple.com/lt/app/trafi/id791973944"
                  imgForApple={isLargerThan850 ? apple_mob : apple}
                  ariaLabelForApple="Link to redirect to download the Trafi app from the App Store"
                  title="Install public transport app"
                  widthForTitle="307px"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="full"
          flexDirection="column"
          m="auto"
        >
          <Heading
            color="black"
            variant="regularHeading"
            m="0 auto"
            fontSize={{
              base: '40px',
              md: '65px',
              lg: '80px'
            }}
            fontWeight={600}
            lineHeight="90%"
            letterSpacing="-0.06em"
            maxW={{ base: '275px', sm: '360px', md: '615px', lg: '970px' }}
            paddingBottom={{
              base: '30px',
              md: '60px',
              lg: '90px'
            }}
          >
            Ride the Euruko transfer
          </Heading>
          <Flex
            alignItems={{
              base: 'center',
              lg: 'flex-start'
            }}
            flexDirection={{
              base: 'column',
              lg: 'row'
            }}
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
                lg: '60px 0'
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
                08:30 — 10:00
              </Text>
              <Flex flexDirection="column">
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
                  Spot A
                </Text>
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
                    md: '500px'
                  }}
                  marginBottom={{ base: '20px', md: '30px' }}
                >
                  Courtyard by Marriott Vilnius City Center Rinktinės g. 3,
                  09234 Vilnius
                </Text>
                <Button
                  ariaLabel="Button for redirecting to the geolocation of Courtyard by Marriott Vilnius City Center in google map"
                  link="https://maps.app.goo.gl/CREVKpjk2H6um1ya8"
                />
              </Flex>
              <Flex flexDirection="column">
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
                  Spot B
                </Text>

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
                    base: '175px',
                    sm: '250px',
                    md: '520px'
                  }}
                  marginBottom={{ base: '20px', md: '30px' }}
                >
                  City tour bus-stop Šventaragio g. 1, 01103 Vilnius
                </Text>
                <Button
                  ariaLabel="Button for redirecting to the geolocation of City tour bus-stop in google map"
                  link="https://maps.app.goo.gl/i89KrNY86Wt6S3oY8"
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
