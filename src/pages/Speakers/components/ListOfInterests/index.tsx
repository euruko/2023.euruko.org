import { Flex, Heading, Text, Img, Box, useMediaQuery } from '@chakra-ui/react';

import arrow from './assets/arrow.svg';

const interests = [
  'RUBY ON RAILS',
  'RSPEC',
  'RUBYGEMS',
  'WEB APPLICATION SECURITY',
  'HOW TO CONTRIBUTE TO OSS',
  'MENTORING',
  'DEBUGGERS CONTINUOUS INTEGRATION',
  'INTEGRATION TESTING',
  'DEVOPS',
  'DEPLOYMENT TOOLING',
  'MEET-UP ORGANISING',
  'PROMOTING DIVERSITY'
];

export const ListOfInterests = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      maxW="1540px"
      p="0 10px"
      margin="auto"
      flexDirection="column"
      color="#D9D9D9"
    >
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Img
          m="auto"
          src={arrow}
          alt="Arrow down"
        />
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          padding={isLargerThan750 ? '40px 0' : '90px 0'}
          maxW="1100px"
        >
          HERE ARE TOP-LIST OF INTERESTS OF EURUKO’22 ATTENDEES
        </Heading>
        <Img
          m="auto"
          src={arrow}
          alt="Arrow down"
        />
      </Flex>
      <Flex
        p="90px 0"
        justifyContent="center"
        flexWrap="wrap"
      >
        {interests.map((interest) => (
          <Box
            backgroundColor="#2BBA7E"
            borderRadius="92px"
            m="2px 14px"
            key={interest}
          >
            <Text
              variant="regularText"
              fontSize={isLargerThan750 ? '28px' : '56px'}
              fontWeight={600}
              color="black"
              padding={isLargerThan750 ? '5px 10px' : '15px 30px'}
              textTransform="lowercase"
            >
              {interest}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
