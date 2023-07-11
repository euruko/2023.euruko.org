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
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import leftArrow from '~/shared/assets/leftArrow.svg';
import rightArrow from '~/shared/assets/rightArrow.svg';
import { ArrowIcon } from '~/shared/components/ArrowIcon';

import { slider } from './assets';
import place from './assets/coolicon.svg';
import website from './assets/Shape.svg';

export const Venue = () => {
  const [isLargerThan1615] = useMediaQuery('(max-width: 1615px)');
  const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: (
      <ArrowIcon
        icon={rightArrow}
        side="right"
      />
    ),
    prevArrow: (
      <ArrowIcon
        icon={leftArrow}
        side="left"
      />
    )
  };

  const containerSliderWidth = (() => {
    switch (true) {
      case isLargerThan1615 && isLargerThan1200 && isLargerThan850:
        return '95%';
      case isLargerThan1615 && isLargerThan1200:
        return '80%';
      case isLargerThan1615:
        return '1200px';
      default:
        return '100%';
    }
  })();

  const headerFontSize = (() => {
    switch (true) {
      case isLargerThan1200 && isLargerThan850:
        return '90px';
      case isLargerThan1200:
        return '180px';
      default:
        return '361.09px';
    }
  })();

  return (
    <Box backgroundColor="#D9D9D9">
      <Flex
        maxW="1520px"
        margin={isLargerThan1200 ? '0px auto' : '120px auto 0 auto'}
        justifyContent="center"
        gap={isLargerThan850 ? '60px' : '90px'}
        alignItems="center"
        flexDirection="column"
        wrap="nowrap"
      >
        <Heading
          variant="regularHeading"
          fontSize={headerFontSize}
          fontWeight={600}
          color="#000"
          textTransform="none"
        >
          Venue
        </Heading>
        <Text
          fontWeight={500}
          color="#000"
          fontSize={isLargerThan850 ? '25px' : '35px'}
          lineHeight="120%"
          maxW="1120px"
          margin="0 20px"
        >
          Vilnius Gediminas Technical University is the main Lithuanian
          university. Its campus is spread across Vilnius, with the main
          buildings in the wooded Saulėtekis neighborhood of the Antakalnis
          eldership, not far from the City Center and the Old Town.
        </Text>
        <div
          style={{
            width: containerSliderWidth,
            margin: '0 auto'
          }}
        >
          <Slider {...settings}>
            {slider.map((item) => (
              <div key={item.alt}>
                <Flex
                  backgroundColor="#D9D9D9"
                  margin="0 10px"
                  flexDirection="column"
                  borderRadius="60px"
                >
                  <Img
                    src={item.src}
                    alt={item.alt}
                  />
                </Flex>
              </div>
            ))}
          </Slider>
        </div>

        <Heading
          variant="regularHeading"
          fontSize={isLargerThan850 ? '45px' : '80px'}
          fontWeight={500}
          lineHeight="100%"
          color="#000"
          textTransform="none"
          w={isLargerThan1615 ? '90%' : '1518px'}
        >
          Our event will take place in a modern and roomy hall, capable of
          accommodating up to 1000 individuals.
        </Heading>
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
            <Text
              fontWeight={500}
              color="#D9D9D9"
              fontSize={isLargerThan850 ? '25px' : '35px'}
              lineHeight="120%"
              maxW="1006px"
              margin="0 auto 10px auto"
            >
              You&apos;ll have multiple transportation options to reach the
              venue, including public transport, taxis, or arranged transfers.
              The journey should take approximately 10 to 15 minutes.
            </Text>
            <Text
              fontWeight={500}
              color="#606060"
              fontSize={isLargerThan850 ? '14px' : '21px'}
              lineHeight="120%"
              maxW="1006px"
              margin="0 auto"
            >
              We will update the venue information as it becomes available.
            </Text>
            <Flex
              w="100%"
              mt="60px"
              justifyContent="center"
              gap="20px"
              flexDirection={isLargerThan1200 ? 'column' : 'row'}
            >
              <Link
                href="https://vilniustech.lt"
                target="_blank"
              >
                <Button
                  w={isLargerThan850 ? '100%' : '493px'}
                  padding={isLargerThan850 ? '30px' : '60px'}
                  variant="blackButton"
                  border="1px solid #D9D9D9"
                  fontSize={isLargerThan850 ? '28px' : undefined}
                  aria-label="Button for redirecting to the website Vilnius Gediminas Technical University"
                >
                  <Img
                    src={website}
                    mr="10px"
                  />
                  Website
                </Button>
              </Link>
              <Link
                href="https://www.google.com/maps/place/Vilnius+Gediminas+Technical+University+(VILNIUS+TECH)/@54.7226447,25.3352698,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd96e86a61f053:0xd4bb20eab67f9bf9!8m2!3d54.7226447!4d25.3378447!16zL20vMDNiMzB3?entry=ttu"
                target="_blank"
              >
                <Button
                  w={isLargerThan850 ? '100%' : '493px'}
                  padding={isLargerThan850 ? '30px' : '60px'}
                  background="#2BBA7E"
                  variant="whiteButton"
                  borderRadius="45px"
                  fontSize={isLargerThan850 ? '28px' : undefined}
                  aria-label="Button for redirecting to the geolocation of Vilnius Gediminas Technical University in google map"
                >
                  <Img
                    src={place}
                    mr="10px"
                  />
                  Location
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
