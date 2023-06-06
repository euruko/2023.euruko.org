import {
  Box,
  Button,
  Heading,
  useMediaQuery,
  Flex,
  Text,
  Img
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import bgEllipse from './assets/bgEllipse.svg';
import ellipse from './assets/ellipse.svg';
import { REASONS } from './constants';
import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  const navigate = useNavigate();
  const [isLargerThan1100] = useMediaQuery('(max-width: 1100px)');

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
        backgroundImage={bgEllipse}
        backgroundPosition="center 50px"
      >
        <Img
          src={ellipse}
          position="absolute"
          top={isLargerThan1100 ? '120px' : '220px'}
          maxW={isLargerThan1100 ? '300px' : undefined}
          left={isLargerThan1100 ? 'calc(50% - 150px)' : 'calc(50% - 380px)'}
          alt="Background image"
        />
        <Heading
          variant="regularHeading"
          fontSize={isLargerThan1100 ? '160px' : '580px'}
          color="#2BBA7E"
          mt="150px"
        >
          404
        </Heading>
        <Heading
          variant="regularHeading"
          fontSize={isLargerThan1100 ? '42px' : '84px'}
          color="#2BBA7E"
          mt="20px"
        >
          reasons to attend <br />
          Euruko 2023
        </Heading>
        <Flex
          flexDirection="column"
          alignItems="center"
          mt="150px"
        >
          {REASONS.map((reason, index) => (
            <Text
              maxW="1000px"
              m="20px"
              key={reason}
              variant="regularText"
              fontSize={isLargerThan1100 ? '21px' : '42px'}
              fontWeight={500}
              color="#D9D9D9"
            >
              {index + 1}. {reason}
            </Text>
          ))}
        </Flex>
        <Button
          m="150px auto"
          onClick={() => {
            navigate('/');
          }}
          variant="whiteButton"
          padding="40px 60px"
        >
          Go back
        </Button>
      </Flex>

      <Footer />
    </Box>
  );
};

Component.displayName = 'NotFoundRoute';
