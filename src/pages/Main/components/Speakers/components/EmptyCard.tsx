import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';

import {
  useResponsiveStylesForCard,
  useResponsiveStylesForCustomCard
} from './helper';

export const EmptyCard = () => {
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');

  const { cardHeight, headerFontSize } = useResponsiveStylesForCustomCard();
  const { imageHeight, imageWidth } = useResponsiveStylesForCard({});

  return (
    <Flex
      backgroundColor="#000"
      margin="0 10px"
      p={isLargerThan850 ? '30px 20px' : '60px 20px'}
      flexDirection="column"
      borderRadius="40px"
      border="1px solid #2BBA7E"
      minH={cardHeight}
    >
      <Heading
        color="#2BBA7E"
        variant="regularHeading"
        fontSize={headerFontSize}
        fontWeight={600}
        margin={isLargerThan850 ? '0 auto 36px auto' : '0 auto 46px auto'}
      >
        To be
        <br />
        announced
        <br />
        soon
      </Heading>
      <Box
        position="relative"
        w={imageWidth}
        h={imageHeight}
        margin="0 auto"
      />
      <Text
        color="#2BBA7E"
        fontSize={isLargerThan850 ? '12px' : '16px'}
        fontWeight={500}
        lineHeight="120%"
        margin={isLargerThan850 ? '10px auto 0 auto' : '30px auto 0 auto'}
      >
        Keynote
      </Text>
    </Flex>
  );
};
