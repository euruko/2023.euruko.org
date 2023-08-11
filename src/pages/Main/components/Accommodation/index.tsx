import { Box, Flex, Heading, Img, Link, Text } from '@chakra-ui/react';

import arrowLeft from './assets/arrow-left.svg';
import arrowRight from './assets/arrow-right.svg';
import Courtyard from '../OurPartners/assets/partnersLogos/Courtyard.png';

const blocks = [
  'Stay in a luxury Courtyard by Marriott in the very heart of Vilnius.',
  'Get a special price of 89 EUR per night with a 20% discount.',
  'Hurry up! Price is valid until 11th of September and the number of rooms is limited!',
  'No worries, a yummy breakfast is included.',
  'Get a low supplement rate of 11 EUR for double occupancy.'
];

export const Accommodation = () => (
  <Box
    backgroundColor="#D9D9D9"
    p={{ base: '40px 0 60px 0', md: '0 0 120px 0' }}
  >
    <Flex
      maxW="1520px"
      m="0 auto"
      border="1px solid #D9D9D9"
      borderRadius="45px"
      justifyContent="space-evenly"
      p={{ base: '10px 20px', md: '60px' }}
    >
      <Img
        src={arrowLeft}
        width={{ base: '60px', md: 'fit-content' }}
        alt="Grab Tickets"
        height={{ base: '50px', md: '113px' }}
        display={{ base: 'none', md: 'block' }}
      />
      <Heading
        variant="regularHeading"
        fontSize={{
          base: '30px',
          sm: '55px',
          md: '90px',
          lg: '100px',
          xl: '120px'
        }}
        fontWeight={600}
        maxWidth="1068px"
        color="#000"
        textTransform="uppercase"
      >
        Welcome home <br />
        of Euruko 2023
      </Heading>
      <Img
        src={arrowRight}
        width={{ base: '60px', md: 'fit-content' }}
        alt="Grab Tickets"
        height={{ base: '50px', md: '113px' }}
        display={{ base: 'none', md: 'block' }}
      />
    </Flex>
    <Flex
      maxW="1520px"
      margin="0px auto"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      wrap="nowrap"
      padding={{ base: '20px' }}
    >
      <Text
        variant="regularText"
        fontSize={{
          base: '20px',
          sm: '25px',
          md: '40px',
          lg: '50px',
          xl: '60px'
        }}
        lineHeight="88.5%"
        fontWeight={500}
        color="#000"
        maxWidth={{
          base: '280px',
          sm: '280px',
          md: '450px',
          lg: '650px',
          xl: '790px'
        }}
      >
        Win on accommodation with our special ticket!
      </Text>
      <Flex
        maxW="1520px"
        margin={{
          base: '30px auto',
          sm: '30px auto 40px auto',
          md: '90px auto'
        }}
        justifyContent="center"
        gap="20px"
        alignItems="center"
        wrap="wrap"
      >
        {blocks.map((text) => (
          <Box
            key={text}
            p={{
              base: '10px 40px',
              sm: '10px 40px',
              md: '20px 80px',
              lg: '20px 80px',
              xl: '30px 95px'
            }}
            maxW="749px"
            borderRadius={{ base: '40px', sm: '105px' }}
            background="#000"
          >
            <Text
              color="#D9D9D9"
              lineHeight="120%"
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize={{
                base: '16px',
                sm: '25px',
                md: '26px',
                lg: '26px',
                xl: '30px'
              }}
              maxW={{
                base: '535px',
                sm: '435px',
                md: '435px',
                lg: '435px',
                xl: '535px'
              }}
              minH={{
                base: '58px',
                sm: '94px',
                md: '94px',
                lg: '94px',
                xl: '108px'
              }}
              m="auto"
            >
              {text}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex
        gap={{ base: '20px', sm: '30px', lg: '120px' }}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
      >
        <Text
          color="#000"
          lineHeight="120%"
          fontSize={{ base: '12px', md: '30px' }}
          fontWeight={500}
          maxW="535px"
          m="0 auto"
        >
          Visit Courtyard{' '}
          <Link
            href="https://www.marriott.com/en-us/hotels/vnocy-courtyard-vilnius-city-center/overview/"
            target="_blank"
            textDecor="underline"
          >
            website
          </Link>
          <br />
          to learn more and buy tickets to get more instructions.
        </Text>
        <Box width={{ base: '200px', md: 'fit-content' }}>
          <Link
            href="https://www.marriott.com/en-us/hotels/vnocy-courtyard-vilnius-city-center/overview/"
            target="_blank"
          >
            <Img
              src={Courtyard}
              alt="Courtyard by Marriott Vilnius City Center logo"
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  </Box>
);
