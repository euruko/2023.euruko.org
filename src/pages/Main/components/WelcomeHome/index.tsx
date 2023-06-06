import { Text, Box, Flex, Heading, Img, useMediaQuery } from '@chakra-ui/react';

import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';

export const WelcomeHome = () => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Box
      backgroundColor="#D9D9D9"
      p="20px 10px 120px 10px"
    >
      <Flex
        maxW="1540px"
        margin="auto"
        alignItems="center"
        backgroundColor="black"
        borderRadius="80px"
        justifyContent="space-around"
        flexWrap="wrap"
        p="10px"
        pb="115px"
        color="#D9D9D9"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan700 ? '55px' : '120px'}
          lineHeight="90%"
          padding={isLargerThan700 ? '35px' : '95px'}
          letterSpacing="-0.06em"
        >
          Welcome home
          <br /> of Euruko 2023
        </Heading>
        <Flex
          flexWrap="wrap"
          justifyContent="center"
        >
          <Text
            maxW="615px"
            mt="40px"
            variant="regilarText"
            fontSize={isLargerThan700 ? '26px' : '31px'}
            lineHeight="120%"
            fontWeight={500}
          >
            We have prepared additional opportunities for your accomodation in
            Vilnius. Since it is a popular tourist city, you&apos;d better to
            book your hotel beforhand. Here is the list of our recommendations.
          </Text>
          <Flex
            flexWrap="wrap"
            maxW="615px"
            justifyContent="space-evenly"
            alignContent="center"
            gap="20px"
          >
            <Img
              src={logo1}
              alt="Hotel logo"
              width="237px"
              maxHeight="34px"
            />
            <Img
              src={logo2}
              alt="Hotel logo"
              width="208px"
              maxHeight="117px"
            />
            <Img
              src={logo3}
              alt="Hotel logo"
              width="225px"
              maxHeight="92px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
