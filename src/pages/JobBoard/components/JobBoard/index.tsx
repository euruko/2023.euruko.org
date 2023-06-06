import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';

import { Jobs } from '../Jobs';

export const JobBoard = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      maxW="1540px"
      p="0 10px"
      margin="auto"
      flexDirection="column"
      color="#D9D9D9"
      mb="50px"
    >
      <Flex
        flexDirection="column"
        m="auto"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          paddingTop="160px"
        >
          Job board
        </Heading>
        <Text
          variant="regularText"
          fontWeight={500}
          fontSize={isLargerThan750 ? '28px' : '42px'}
          lineHeight="120%"
          letterSpacing="-0.02em"
          maxW="1270px"
          padding="85px 0px"
        >
          Find new career opportunities from the world&apos;s top employers who
          are making a huge contribution to supporting Ruby and Euruko. Join our
          our online track in Discord for free and contact them directly with
          any questions or proposals.
        </Text>
      </Flex>

      <Jobs />
    </Flex>
  );
};
