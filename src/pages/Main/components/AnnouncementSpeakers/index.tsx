import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';

export const AnnouncementSpeakers = () => {
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
          gap="35px"
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
            fontSize={isLargerThan750 ? '40px' : '80px'}
            fontWeight={600}
          >
            The speakers
            <br /> announcement
            <br /> is on its way!
          </Heading>
          <Text
            variant="regularText"
            fontSize={isLargerThan750 ? '32px' : '38px'}
            maxWidth="744px"
            fontWeight={500}
          >
            Our diligent Programme Committee is actively working on finalising
            the list, and we will promptly release it as soon as their tasks are
            complete. Stay tuned for the exciting lineup!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
