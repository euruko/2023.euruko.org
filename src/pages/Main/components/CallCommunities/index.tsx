import {
  Button,
  Flex,
  Heading,
  Text,
  Link,
  useMediaQuery
} from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

export const CallCommunities = () => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');
  const [isLargerThan1489] = useMediaQuery('(max-width: 1488px)');
  // const navigate = useNavigate();

  return (
    <Flex
      id="callCommunities"
      p="90px 0"
    >
      <Flex
        maxW="1540px"
        margin="30px auto 0 auto"
        color="white"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="157px"
      >
        <Flex
          w={isLargerThan700 ? 'full' : undefined}
          flexDirection="column"
          alignItems="center"
          gap={isLargerThan1489 ? '30px' : '70px'}
          justifyContent="space-between"
          background="radial-gradient(50% 50% at 50% 50%, #FF74BD 0%, rgba(0, 0, 0, 0) 100%);"
          backgroundPosition="center 0px"
          backgroundRepeat="no-repeat"
          margin={isLargerThan1489 ? '-200px 0' : '-55px 0'}
          p={isLargerThan1489 ? '150px 0' : '50px 0'}
        >
          <Heading
            variant="regularHeading"
            fontSize={isLargerThan700 ? '42px' : '80px'}
            fontWeight={600}
            maxWidth="700px"
          >
            CAll for <br />
            communities
          </Heading>
          <Button
            maxHeight="120px"
            height="100%"
            variant="whiteButton"
            border="1px solid #D9D9D9"
            padding={isLargerThan700 ? '20px' : '20px 24px'}
            borderRadius="27px"
            whiteSpace="pre-wrap"
            fontSize={isLargerThan700 ? '18px' : '21px'}
            // onClick={() => {
            //   navigate('/community');
            // }}
            as={Link}
            href="mailto:organisers@euruko.org"
            textTransform="lowercase"
          >
            {/* Board of communities */}
            organisers@euruko.org
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          maxWidth="748px"
          margin={isLargerThan1489 ? '-50px 0' : undefined}
          padding={isLargerThan700 ? '0 20px' : undefined}
        >
          <Text
            variant="regularText"
            fontSize={isLargerThan700 ? '24px' : '35px'}
            fontWeight={500}
          >
            Shake off the post-pandemic stasis and {!isLargerThan700 && <br />}
            ignite your local Ruby community with our
            {!isLargerThan700 && <br />}
            unique opportunities.
          </Text>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="20px"
            maxWidth="748px"
            margin={isLargerThan1489 ? '60px' : '90px auto'}
          >
            <Text
              variant="regularText"
              fontSize="21px"
              fontWeight={500}
            >
              Get your own discord channel with 500+ friends waiting for you.
            </Text>
            <Text
              variant="regularText"
              fontSize="21px"
              fontWeight={500}
            >
              Get your own discord channel with 500+ friends waiting for you.
              Host your own meetup within Euruko. Lightning talk, live session,
              workshop or AMA-session — the whole stage is yours.
            </Text>
            <Text
              variant="regularText"
              fontSize="21px"
              fontWeight={500}
            >
              Host your own talk on the main stage alongside speakers within
              unconference format.
            </Text>
            <Text
              variant="regularText"
              fontSize="21px"
              fontWeight={500}
            >
              Pitch your city and bring Euruko 2024 into your city.
            </Text>
          </Flex>
          <Text
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#FF74BD"
            marginBottom={isLargerThan1489 ? '50px' : undefined}
          >
            Grab a special price ticket <br />
            and join the biggest European Ruby conference.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
