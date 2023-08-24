import { Box, Flex, Heading, Img } from '@chakra-ui/react';

import { Events } from './Event';
import grab from '../assets/grab.svg';
import { type DayType } from '../constants';

export const DayEvents = ({
  day,
  isFirstDay
}: {
  day: DayType;
  isFirstDay?: boolean;
}) => (
  <Box backgroundColor={day.backgroundColor}>
    <Box
      id="tickets"
      maxW="1540px"
      margin={isFirstDay ? '100px auto 0 auto' : '0 auto'}
      p={{
        base: '0px',
        xl: '15px'
      }}
    >
      <Flex
        justifyContent={{
          base: 'space-around',
          lg: 'space-between'
        }}
        padding={{
          base: '40px 0 20px 0',
          xl: '40px'
        }}
        borderBottom="1px #000 solid"
      >
        <Img
          src={grab}
          width={{
            base: '49px',
            md: '79px',
            xl: '108px'
          }}
          alt="Grab Tickets"
          height={{
            base: '49px',
            md: '79px',
            xl: '108px'
          }}
        />
        <Heading
          variant="regularHeading"
          fontSize={{
            base: '39px',
            sm: '40px',
            md: '80px',
            lg: '108px'
          }}
          fontWeight={600}
          maxWidth={{
            base: '229px',
            md: '940px'
          }}
          color="#000"
        >
          {day.date}
        </Heading>
        <Img
          src={grab}
          width={{
            base: '49px',
            md: '70px',
            xl: '120px'
          }}
          alt="Grab Tickets"
          height={{
            base: '49px',
            md: '79px',
            xl: '108px'
          }}
        />
      </Flex>
      {day.events.map((event, index) => (
        <Box
          key={`${event.mainHeader}_${event.time}`}
          borderBottom={
            index !== day.events.length - 1 ? '1px solid #000' : undefined
          }
        >
          <Events
            event={event}
            key={event.mainHeader}
          />
        </Box>
      ))}
    </Box>
  </Box>
);
