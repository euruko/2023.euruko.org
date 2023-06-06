import {
  Flex,
  useMediaQuery,
  Heading,
  Img,
  Text,
  Button
} from '@chakra-ui/react';

import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import logo4 from './assets/logo4.svg';
import logo5 from './assets/logo5.svg';
import { PARTICIPANTS } from './constants';

export const Community = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
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
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          paddingTop="160px"
          paddingBottom="85px"
        >
          Community partners
        </Heading>
      </Flex>

      <Flex
        backgroundColor="#D9D9D9"
        borderRadius="80px"
        gap="80px"
        flexWrap="wrap"
        p="90px"
        justifyContent="center"
      >
        <Img src={logo1} />
        <Img src={logo3} />
        <Img src={logo2} />
        <Img src={logo4} />
        <Img src={logo5} />
        <Img src={logo4} />
        <Img src={logo1} />
        <Img src={logo4} />
        <Img src={logo2} />
        <Img src={logo3} />
        <Img src={logo5} />
      </Flex>

      <Flex
        flexDirection="column"
        m="auto"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          paddingTop="205px"
        >
          Community <br />
          participants
        </Heading>
        <Text
          variant="regularText"
          fontWeight={500}
          fontSize={isLargerThan750 ? '28px' : '42px'}
          lineHeight="120%"
          letterSpacing="-0.02em"
          maxW="1270px"
          p="60px 0 130px 0"
          maxWidth="1000px"
        >
          Ruby contributors recognized locally now on the Euruko stage. Join
          their activities on our online track in Discord for free or grab your
          ticket and become a part of the biggest Ruby community in Europe
        </Text>
      </Flex>

      {PARTICIPANTS.map((participant) => (
        <Flex
          pt="20px"
          flexWrap="wrap"
          justifyContent="center"
          key={participant.title}
        >
          <Flex
            backgroundColor="#D9D9D9"
            flexDirection="column"
            borderRadius="80px"
            p="80px 0"
            maxW="622px"
            w="100%"
            alignItems="center"
          >
            <Img
              m="25px"
              src={participant.image}
              maxW="220px"
              maxH="220px"
            />
            <Heading
              as="h4"
              variant="regularHeading"
              textTransform="none"
              color="#9A9A9A"
              fontWeight={500}
              letterSpacing="-0.02em"
              lineHeight="120%"
              fontSize="21px"
              mt="120px"
              maxWidth="500px"
            >
              {participant.title}
            </Heading>
          </Flex>
          <Flex
            flexDirection="column"
            p={isLargerThan750 ? '20px' : '120px'}
            alignItems="center"
          >
            <Text
              variant="regularText"
              fontSize="30px"
              maxW="650px"
              fontWeight={500}
            >
              {participant.description}
            </Text>
            <Button
              w="294px"
              borderRadius="22px"
              mt="60px"
              p="30px"
              variant="whiteButton"
              fontSize="21px"
            >
              Go to Discord
            </Button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
