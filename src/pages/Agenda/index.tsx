import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { DayEvents } from './components/DayEvents';
import { agenda } from './constants';
// import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box
      color="white"
      backgroundColor="black"
      textAlign="center"
    >
      <Nav />
      <DayEvents
        day={agenda.firstDay}
        isFirstDay
      />
      <DayEvents day={agenda.secondDay} />
      <DayEvents day={agenda.thirdDay} />
      {/* <Footer /> */}
    </Box>
  );
};

Component.displayName = 'JobBoardRoute';
