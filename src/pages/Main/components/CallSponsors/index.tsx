import {
  Button,
  Box,
  Flex,
  Heading,
  Img,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import sponsors from './assets/sponsors.png';

export const CallSponsors = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Box
      id="callSponsors"
      backgroundColor="#D9D9D9"
      pb="120px"
    >
      <Flex
        maxW="1520px"
        margin="40px auto 65px auto"
        color="black"
        flexWrap="wrap-reverse"
        justifyContent="center"
      >
        <Flex
          maxWidth="620px"
          flexDirection="column"
          marginTop="120px"
          alignItems="center"
          overflow="hidden"
        >
          <Heading
            variant="regularHeading"
            fontSize={isLargerThan750 ? '60px' : '110px'}
            fontWeight={600}
          >
            CALL FOR <br />
            SPONSORS
          </Heading>
          <Text
            variant="regularText"
            fontSize={isLargerThan750 ? '28px' : '38px'}
            fontWeight={500}
            mt="60px"
          >
            Ruby is all about community and support. Be a part of it and add a
            true recognition to your brand among the most relevant audience,
            that is ready to listen. Get our sponsorship proposal with a lot of
            lovely stuff and great opportunities for your promo.
          </Text>
        </Flex>
        <Img
          src={sponsors}
          mt="-110px"
          alt="Sponsors"
        />
      </Flex>
      <Flex
        maxW="1540px"
        margin="auto"
        p="0 10px"
      >
        <Flex
          width="100%"
          alignItems="center"
          backgroundColor="black"
          borderRadius="45px"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Text
            variant="regularText"
            fontWeight={600}
            fontSize={isLargerThan750 ? '46px' : '56px'}
            lineHeight="90%"
            padding="35px 40px"
            color="#D9D9D9"
          >
            Support #1 <br />
            Ruby conference <br />
            in Europe!
          </Text>
          <Button
            padding={isLargerThan750 ? '40px' : '60px'}
            m="20px"
            fontSize={isLargerThan750 ? '22px' : undefined}
            variant="whiteButton"
            onClick={() => {
              window.open(
                'https://drive.google.com/file/d/1O3pj_5or3s0Tao-3n4MTFMLHVw3zTt7n/view?usp=share_link'
              );
            }}
          >
            Download proposal
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
