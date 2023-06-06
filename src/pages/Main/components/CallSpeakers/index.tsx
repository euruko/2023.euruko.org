import { Button, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const CallSpeakers = () => {
  const navigate = useNavigate();
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      id="speakers"
      pb="85px"
    >
      <Flex
        maxW="1520px"
        margin="40px auto"
        color="white"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex
          flexWrap="wrap"
          gap="20px"
          mt={isLargerThan750 ? '60px' : '130px'}
          mb="115px"
          alignItems="center"
          color="#D9D9D9"
          justifyContent="center"
        >
          <Heading
            background="radial-gradient(50% 50% at 50% 50%, #2BBA7E 0%, rgba(0, 0, 0, 0) 100%)"
            backgroundRepeat="no-repeat"
            p="200px 0px"
            m="-200px 0"
            variant="regularHeading"
            fontSize={isLargerThan750 ? '60px' : '110px'}
            fontWeight={600}
          >
            CAll for <br />
            speakers
          </Heading>
          <Text
            variant="regularText"
            fontSize={isLargerThan750 ? '32px' : '42px'}
            maxWidth="650px"
            fontWeight={500}
            p="40px"
          >
            Join Matz and other top-notch speakers and tell everyone about
            trends in Ruby or what&apos;s going on in the community world.
          </Text>
        </Flex>
        <Button
          maxWidth="500px"
          maxHeight="120px"
          height="100%"
          width="100%"
          variant="blackButton"
          border="1px solid #D9D9D9"
          padding="40px"
          fontSize={isLargerThan750 ? '28px' : undefined}
          onClick={() => {
            navigate('/speakers');
          }}
        >
          Click for details
        </Button>
      </Flex>
    </Flex>
  );
};
