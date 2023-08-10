import { Box, Flex, Heading, Img, Text, useMediaQuery } from '@chakra-ui/react';

import { useResponsiveStylesForCustomCard } from './helper';
import PanelDiscussionImage from '../assets/speakers/30.png';

export const PanelDiscussionCard = () => {
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');

  const {
    cardHeight,
    imageWidth,
    imageHeight,
    headerFontSize,
    talkFontSize,
    talkDescriptionFontSize,
    talkMinHeight,
    talkDescriptionMinHeight
  } = useResponsiveStylesForCustomCard();

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
        margin={isLargerThan850 ? '0 auto 10px auto' : '0 auto 20px auto'}
      >
        Panel
        <br />
        discussion
      </Heading>
      <Box
        position="relative"
        w={imageWidth}
        h={imageHeight}
        margin="0 auto"
      >
        <Img
          w="full"
          h="full"
          alt="Number 30 is coming out of the portal"
          src={PanelDiscussionImage}
        />
      </Box>
      <Box>
        <Text
          color="#2BBA7E"
          fontSize={isLargerThan850 ? '12px' : '16px'}
          fontWeight={500}
          lineHeight="120%"
          margin={isLargerThan850 ? '10px auto 0 auto' : '30px auto 0 auto'}
        />
        <Text
          minH={talkMinHeight}
          maxW="665px"
          color="#2BBA7E"
          fontSize={talkFontSize}
          fontWeight={500}
          lineHeight="120%"
          margin={isLargerThan850 ? '0 auto 10px auto' : '0 auto 30px auto'}
        >
          30 years of Ruby: from Matz to now
        </Text>
        <Text
          minH={talkDescriptionMinHeight}
          maxW="665px"
          color="#A5A5A5"
          fontSize={talkDescriptionFontSize}
          fontWeight={500}
          lineHeight="120%"
          margin="0 auto"
        >
          A big talk about how Ruby has transformed the development landscape,
          how it has undergone its own evolution, the shifts within the Ruby
          community, the transient nature of patterns and trends, the rise and
          fall of hype cycles, and the lessons we can glean from history to
          confront future challenges.
        </Text>
      </Box>
    </Flex>
  );
};
