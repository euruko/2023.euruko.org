import {
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import difference from './assets/difference.png';

export const MakeDifference = () => {
  const [isLargerThan900] = useMediaQuery('(max-width: 900px)');

  return (
    <Flex backgroundColor="#D9D9D9">
      <Flex
        maxW="1520px"
        margin="40px auto 10px auto"
        color="black"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Img
          src={difference}
          p="0 10px"
          alt="Clipart of a rabbit looking through a magnifying glass from a teleporter"
        />
        <Flex
          maxWidth="600px"
          flexDirection="column"
          margin={isLargerThan900 ? '10px' : '60px'}
          alignItems="center"
        >
          <Heading
            variant="regularHeading"
            fontSize={isLargerThan900 ? '48px' : '100px'}
            fontWeight={600}
          >
            Make a <br />
            difference!
          </Heading>
          <Text
            variant="regularText"
            fontSize={isLargerThan900 ? '28px' : '36px'}
            fontWeight={500}
            mt="60px"
          >
            Join our program committee and help us to shape the Euruko&apos;s
            agenda. Contact us with a short bio and be the one who defines what
            is hot and what is not.
          </Text>
          <Link href="mailto:organizers@euruko.org">
            <Button
              mt="60px"
              variant="linkButton"
            >
              organizers@euruko.org
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
