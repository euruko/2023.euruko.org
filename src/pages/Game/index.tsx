import { useEffect } from 'react';

import { Image } from '@chakra-ui/react';

export const Component = () => {
  useEffect(() => {
    window.location.href = 'https://euruko-tetris-bc8548a88ae6.herokuapp.com';
  }, []);

  return (
    <Image
      src="./loader.gif"
      alt="Loading application"
      w="124px"
      h="150px"
      position="fixed"
      top="50vh"
      left="50vw"
      transform="translate(-50%, -50%)"
    />
  );
};

Component.displayName = 'Game';
