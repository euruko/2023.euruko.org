import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import { useResponsiveStylesForCard } from './helper';

type PropsType = {
  speaker: {
    firstName: string;
    lastName: string;
    img: string;
    aboutSpeaker: string;
    talk: string;
    talkDescription: string;
    link: string;
    type: string;
    isSmallText?: boolean;
  };
};

export const SpeakerCard = ({ speaker }: PropsType) => {
  const {
    firstName,
    lastName,
    img,
    aboutSpeaker,
    talkDescription,
    talk,
    isSmallText,
    type,
    link
  } = speaker;

  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');

  const {
    headerFontSize,
    aboutSpeakerFontSize,
    imageHeight,
    imageWidth,
    talkFontSize,
    talkDescriptionFontSize,
    paddingContainer,
    aboutSpeakerMinHeight,
    talkMinHeight,
    talkDescriptionMinHeight,
    buttonHeight
  } = useResponsiveStylesForCard({ isSmallText });

  return (
    <Flex
      backgroundColor="#000"
      margin="0 10px"
      p={paddingContainer}
      flexDirection="column"
      borderRadius="40px"
      border="1px solid #2BBA7E"
    >
      <Heading
        color="#2BBA7E"
        variant="regularHeading"
        fontSize={headerFontSize}
        fontWeight={600}
        margin={isLargerThan850 ? '0 auto 10px auto' : '0 auto 20px auto'}
      >
        {firstName}
        <br />
        {lastName}
      </Heading>
      <Text
        maxW="478px"
        color="#2BBA7E"
        fontSize={aboutSpeakerFontSize}
        fontWeight={500}
        lineHeight="120%"
        minH={aboutSpeakerMinHeight}
        margin={isLargerThan850 ? '0 auto 10px auto' : '0 auto 20px auto'}
      >
        {aboutSpeaker}
      </Text>
      <Box
        position="relative"
        w={imageWidth}
        h={imageHeight}
        margin="0 auto"
      >
        <Img
          w="full"
          h="full"
          alt={`Photo by ${firstName} ${lastName}`}
          src={img}
        />
        <Button
          position="absolute"
          bottom="0"
          left="50%"
          transform="translate(-50%)"
          background="#2BBA7E"
          borderRadius="30.75px"
          height={buttonHeight}
          fontSize={isLargerThan850 ? '12px' : '21px'}
          color="#000"
          _hover={{
            backgroundColor: '#2BBA7E',
            color: '#000'
          }}
          as={Link}
          href={link}
          target="_blank"
          aria-label={`Button to go to ${firstName} ${lastName}'s social networking site`}
        >
          Connect
        </Button>
      </Box>
      <Box>
        <Text
          color="#2BBA7E"
          fontSize={isLargerThan850 ? '12px' : '16px'}
          fontWeight={500}
          lineHeight="120%"
          margin={isLargerThan850 ? '10px auto 0 auto' : '30px auto 0 auto'}
        >
          {type}
        </Text>
        <Text
          minH={talkMinHeight}
          maxW="665px"
          color="#2BBA7E"
          fontSize={talkFontSize}
          fontWeight={500}
          lineHeight="120%"
          margin={isLargerThan850 ? '0 auto 10px auto' : '0 auto 30px auto'}
        >
          {talk}
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
          {talkDescription}
        </Text>
      </Box>
    </Flex>
  );
};
