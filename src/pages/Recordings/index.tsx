import { useEffect } from 'react';

import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import { Video } from './components/Video';
import { videos } from './constatns';
import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

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
          paddingTop={isLargerThan750 ? '100px' : '160px'}
        >
          <Heading
            variant="regularHeading"
            fontWeight={600}
            fontSize={isLargerThan750 ? '21px' : '42px'}
            lineHeight="90%"
            letterSpacing="-0.06em"
            py={isLargerThan750 ? '40px' : '80px'}
          >
            Day 1
          </Heading>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            m="auto"
            width="full"
            justifyContent="center"
            gap={10}
          >
            {videos.firstDay.map((video) => (
              <Video
                key={video.videoId}
                videoId={video.videoId}
                videoTitle={video.title}
              />
            ))}
          </Flex>
          <Heading
            variant="regularHeading"
            fontWeight={600}
            fontSize={isLargerThan750 ? '21px' : '42px'}
            lineHeight="90%"
            letterSpacing="-0.06em"
            pb={isLargerThan750 ? '40px' : '80px'}
            pt={isLargerThan750 ? '80px' : '160px'}
          >
            Day 2
          </Heading>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            m="auto"
            width="full"
            justifyContent="center"
            gap={10}
          >
            {videos.secondDay.map((video) => (
              <Video
                key={video.videoId}
                videoId={video.videoId}
                videoTitle={video.title}
              />
            ))}
          </Flex>
          <Heading
            variant="regularHeading"
            fontWeight={600}
            fontSize={isLargerThan750 ? '21px' : '42px'}
            lineHeight="90%"
            letterSpacing="-0.06em"
            pb={isLargerThan750 ? '40px' : '80px'}
            pt={isLargerThan750 ? '80px' : '160px'}
          >
            Day 3
          </Heading>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            m="auto"
            width="full"
            justifyContent="center"
            gap={10}
          >
            {videos.thirdDay.map((video) => (
              <Video
                key={video.videoId}
                videoId={video.videoId}
                videoTitle={video.title}
              />
            ))}
          </Flex>
          <Text
            variant="regularText"
            fontWeight={500}
            fontSize={isLargerThan750 ? '28px' : '42px'}
            lineHeight="120%"
            letterSpacing="-0.02em"
            maxW="1270px"
            padding={isLargerThan750 ? '40px 0px' : '85px 0px'}
            m="0 auto"
          >
            You can watch all the videos on the{' '}
            <Link
              href="https://www.youtube.com/@Euruko"
              target="_blank"
              textDecoration="underline"
            >
              YouTube
            </Link>{' '}
            channel.
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

Component.displayName = 'RecordingsRoute';
