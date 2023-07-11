import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';

export const AnnouncementSpeakers = () => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');
  const [isLargerThan1303] = useMediaQuery('(max-width: 1303px)');

  return (
    <Flex
      id="speakers"
      pb="60px"
    >
      <Flex
        maxW="1540px"
        p="0 10px"
        margin="40px auto"
        color="white"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="35px"
          mt={isLargerThan700 ? '100px' : '200px'}
          mb={isLargerThan700 ? undefined : '115px'}
          alignItems="center"
          color="#D9D9D9"
        >
          <Flex
            w={isLargerThan700 ? 'full' : undefined}
            flexDirection="column"
            alignItems="center"
            gap="70px"
            justifyContent="center"
            background="radial-gradient(50% 50% at 50% 50%, #2BBA7E 0%, rgba(0, 0, 0, 0) 100%)"
            backgroundPosition="center 0px"
            backgroundRepeat="no-repeat"
            p="150px 0"
            m="-200px 0"
          >
            <Heading
              variant="regularHeading"
              fontSize={isLargerThan700 ? '40px' : '84px'}
              marginBottom={isLargerThan1303 ? '100px' : undefined}
              fontWeight={600}
              maxWidth="750px"
            >
              The speakers
              <br /> announcement
              <br /> is on its way!
            </Heading>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="50px"
            justifyContent="space-between"
            maxWidth="500px"
          >
            <Text
              variant="regularText"
              fontSize={isLargerThan700 ? '24px' : '35px'}
              fontWeight={500}
            >
              Our diligent Programme Committee is actively working on finalising
              the list, and we will promptly release it as soon as their tasks
              are complete. Stay tuned for the exciting lineup!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
