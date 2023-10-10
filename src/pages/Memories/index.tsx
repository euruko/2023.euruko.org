import { useEffect } from 'react';

import { Box, Flex, Img, Link, Text, useMediaQuery } from '@chakra-ui/react';

import { images } from '~/pages/Memories/constatns';
import { Video } from '~/pages/Recordings/components/Video';

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
          alignItems="center"
        >
          <Flex
            justifyContent="center"
            margin="0 auto"
            w="100%"
          >
            <Video
              videoId="P6vFo37B4Rs"
              videoTitle="Euruko 2023. Highlights"
            />
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
            You can see all the photos{' '}
            <Link
              href="https://drive.google.com/drive/folders/1saIrJerMbPgvKH0Xwm9Xuhx06Kl7B1R-"
              target="_blank"
              textDecoration="underline"
            >
              here
            </Link>
            .
          </Text>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            m="auto"
            width="full"
            justifyContent="center"
            gap={10}
          >
            {images.map((image) => (
              <a
                href={`${image}`}
                target="_blank"
                key={image}
                rel="noreferrer"
              >
                <Img
                  src={image}
                  minW="300px"
                  w="300px"
                />
              </a>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

Component.displayName = 'MemoriesRoute';
