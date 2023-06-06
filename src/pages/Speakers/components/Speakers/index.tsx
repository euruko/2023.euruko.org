import {
  Flex,
  Heading,
  Text,
  Divider,
  Center,
  Link,
  Button,
  useMediaQuery
} from '@chakra-ui/react';

import background1 from './assets/background1.svg';
import background2 from './assets/background2.svg';
import { ListOfInterests } from '../ListOfInterests';

export const Speakers = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      maxW="1540px"
      p="0 10px"
      margin="auto"
      flexDirection="column"
      color="#D9D9D9"
    >
      <Flex
        alignItems="center"
        backgroundColor="#2BBA7E"
        borderRadius="45px"
        justifyContent="space-around"
        flexWrap="wrap"
        mt="160px"
        backgroundImage={background1}
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
      >
        <Heading
          variant="regularHeading"
          color="black"
          fontWeight={600}
          fontSize="42px"
          lineHeight="90%"
          letterSpacing="-0.06em"
          padding="51px 35px"
        >
          THE CFP IS OPEN FROM THE 1<sub style={{ fontSize: '14px' }}>ST</sub>{' '}
          OF APRIL TO THE 7<sub style={{ fontSize: '14px' }}>TH</sub> OF JUNE
          2023
        </Heading>
      </Flex>

      <Flex
        border="1px solid #D9D9D9"
        mt="20px"
        borderRadius="80px"
        mb="-100px"
      >
        <Text
          variant="regularText"
          color="#D9D9D9"
          fontWeight={500}
          fontSize={isLargerThan750 ? '28px' : '42px'}
          lineHeight="120%"
          letterSpacing="-0.02em"
          padding={isLargerThan750 ? '25px' : '65px 130px'}
        >
          Euruko is being organized for the past 20 years by Ruby developers for
          Ruby developers. It&apos;s a truly volunteer-based event and like Ruby
          it is fostered by the community. Our attendees enjoy its informal
          atmosphere and lots of opportunities to listen, to talk, to hack and
          to have fun.
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        maxW="1000px"
        m="auto"
        background="radial-gradient(50% 50% at 50% 50%, #2BBA7E -50%, rgba(0, 0, 0, 0) 100%)"
        backgroundPosition="center -50px"
        backgroundRepeat="no-repeat"
        pt="100px"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          paddingTop="170px"
        >
          WHAT DO WE WANT TO HEAR FROM YOU
        </Heading>
        <Text
          variant="regularText"
          fontWeight={500}
          fontSize={isLargerThan750 ? '28px' : '42px'}
          lineHeight="120%"
          letterSpacing="-0.02em"
          padding="60px 20px"
        >
          Euruko attendees — it’s not only Ruby developers, but also Elixirists,
          marketers, frontenders, bloggers with common passion in Ruby, backend,
          community and sharing experience.
        </Text>
      </Flex>

      <ListOfInterests />

      <Flex
        flexWrap={isLargerThan750 ? 'wrap' : undefined}
        justifyContent="center"
        p="0 10px"
        mb="-100px"
      >
        <Text
          variant="regularText"
          fontSize="21px"
          fontWeight={500}
          color="#9A9A9A"
          width="370px"
          p="10px"
        >
          Talks should be delivered in english.
        </Text>
        <Center
          height="60px"
          maxW={isLargerThan750 ? '450px' : undefined}
          w={isLargerThan750 ? '100%' : undefined}
        >
          <Divider
            m="0 40px"
            orientation={isLargerThan750 ? 'horizontal' : 'vertical'}
          />
        </Center>
        <Text
          variant="regularText"
          fontSize="21px"
          fontWeight={500}
          color="#9A9A9A"
          width="490px"
          p="10px"
        >
          Talks are expected to be 30 minutes long, not including a short Q&A
          section after the talk.
        </Text>
        <Center
          height="60px"
          maxW={isLargerThan750 ? '450px' : undefined}
          w={isLargerThan750 ? '100%' : undefined}
        >
          <Divider
            m="0 40px"
            orientation={isLargerThan750 ? 'horizontal' : 'vertical'}
          />
        </Center>
        <Text
          variant="regularText"
          fontSize="21px"
          fontWeight={500}
          color="#9A9A9A"
          width="370px"
          p="10px"
        >
          The questions in the Q&A section are screened and moderated.
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        maxW="1000px"
        m="auto"
        background="radial-gradient(50% 50% at 50% 50%, #2BBA7E -50%, rgba(0, 0, 0, 0) 100%)"
        backgroundPosition="center -50px"
        backgroundRepeat="no-repeat"
        pt="100px"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          paddingTop="150px"
        >
          IF YOUR TALK IS SELECTED
        </Heading>
        <Text
          variant="regularText"
          fontWeight={500}
          fontSize={isLargerThan750 ? '28px' : '42px'}
          lineHeight="120%"
          letterSpacing="-0.02em"
          padding="60px 20px"
        >
          You should be prepared to travel to Vilnius in September to give the
          talk in-person. So, check your calendar to join 20th Euruko in
          Vilnius, Lithuania, from 21th -23th of September 2023!
        </Text>
      </Flex>

      <Flex
        justifyContent="center"
        mt="20px"
        flexWrap="wrap"
      >
        <Text
          variant="regularText"
          fontSize="21px"
          fontWeight={500}
          color="#9A9A9A"
          width="400px"
        >
          All talks will be live-streamed, recorded, and published.
        </Text>
        <Center
          m="0 10px"
          height="60px"
          maxW={isLargerThan750 ? '450px' : undefined}
          w={isLargerThan750 ? '100%' : undefined}
        >
          <Divider
            m="0 40px"
            orientation={isLargerThan750 ? 'horizontal' : 'vertical'}
          />
        </Center>
        <Text
          variant="regularText"
          fontSize="21px"
          fontWeight={500}
          color="#9A9A9A"
          width="400px"
        >
          All talks and speakers must adhere to the conference →{' '}
          <Link
            textDecoration="underline"
            color="#2BBA7E"
            href="https://2023.euruko.org/code"
            target="_blank"
          >
            Code of Conduct
          </Link>
        </Text>
      </Flex>
      <Flex
        m="90px auto 50px auto"
        minWidth="100%"
        alignItems="center"
        backgroundColor="#2BBA7E"
        borderRadius="45px"
        justifyContent="space-around"
        flexWrap="wrap"
        backgroundImage={background2}
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        padding={isLargerThan750 ? '60px 20px' : '110px 20px'}
        gap="20px"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '36px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          color="black"
        >
          Ready to <br />
          rock’n’roll?
        </Heading>
        <Button
          padding={isLargerThan750 ? '40px' : '60px'}
          fontSize={isLargerThan750 ? '28px' : '42px'}
          m="20px"
          maxW="500px"
          w="100%"
          variant="blackButton"
          onClick={() => {
            window.open('https://www.papercall.io/eurukocfp');
          }}
        >
          Apply
        </Button>
      </Flex>
    </Flex>
  );
};
