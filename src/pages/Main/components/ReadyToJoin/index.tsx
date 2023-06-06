import {
  Button,
  Box,
  Flex,
  Heading,
  Link,
  useMediaQuery
} from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

export const ReadyToJoin = () => {
  const [isLargerThan550] = useMediaQuery('(max-width: 550px)');

  return (
    <Box
      backgroundColor="#D9D9D9"
      padding="120px 10px 60px 10px"
    >
      <Flex
        maxW="1520px"
        margin="auto"
        alignItems="center"
        backgroundColor="black"
        borderRadius="45px"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan550 ? '80px' : '105px'}
          lineHeight="90%"
          padding={isLargerThan550 ? '60px 20px' : '80px'}
          letterSpacing="-0.02em"
          color="#D9D9D9"
        >
          Ready to <br />
          join?
        </Heading>
        <Link
          as={HashLink}
          to="/#tickets"
        >
          <Button
            padding={isLargerThan550 ? '30px' : '60px'}
            m="20px"
            variant="whiteButton"
            fontSize={isLargerThan550 ? '28px' : undefined}
          >
            Buy your ticket
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
