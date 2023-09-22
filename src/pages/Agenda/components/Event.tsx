import { Flex, Text } from '@chakra-ui/react';

import { type EventType } from '../constants';

export const Events = ({ event }: { event: EventType }) => (
  <Flex
    flexDirection="column"
    color="#000"
    fontWeight={500}
    maxW="1006px"
    m="0 auto"
    p={{
      base: '30px 15px',
      xl: '30px 0px'
    }}
  >
    {event.place && (
      <Text
        fontSize={{
          base: '14px',
          md: '21px'
        }}
        lineHeight="120%"
        letterSpacing="-0.42px"
      >
        {event.place}
      </Text>
    )}
    <Text
      fontSize={{
        base: '30px',
        md: '40px'
      }}
      lineHeight="120%"
      letterSpacing="-0.8px"
    >
      {event.time}
    </Text>
    <Text
      fontSize={{
        base: '30px',
        md: '40px'
      }}
      lineHeight="120%"
      letterSpacing="-0.8px"
      textTransform="uppercase"
    >
      {event.mainHeader}
    </Text>
    {event.subHeader && (
      <Text
        m="0 auto"
        maxW={{
          base: '320px',
          md: '760px'
        }}
        fontSize={{
          base: '20px',
          md: '30px'
        }}
        lineHeight="120%"
        marginTop="20px"
      >
        {event.subHeader}
      </Text>
    )}
    {event.description && (
      <Text
        fontSize={{
          base: '14px',
          md: '21px'
        }}
        lineHeight="120%"
        marginTop="10px"
      >
        {event.description}
      </Text>
    )}
  </Flex>
);
