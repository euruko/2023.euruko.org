import { Box, Flex, Heading, Img, useMediaQuery } from '@chakra-ui/react';

import { partners } from './assets';

export const OurPartners = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Box
      id="callSponsors"
      backgroundColor="#D9D9D9"
      pb="120px"
    >
      <Flex
        maxW="1540px"
        margin="auto"
        p="0 10px"
      >
        <Flex
          width="100%"
          alignItems="flex-start"
          borderRadius="80px"
          border="1px solid #000"
          justifyContent="space-around"
          flexWrap="wrap"
          padding="0 40px"
        >
          <Heading
            variant="regularHeading"
            fontSize={isLargerThan750 ? '45px' : '80px'}
            margin={isLargerThan750 ? '45px' : '60px auto'}
            fontWeight={600}
            maxWidth="900px"
            color="#000"
            textTransform="none"
          >
            Our Partners
          </Heading>
          <Flex
            width="100%"
            justifyContent="center"
            flexWrap="wrap"
            marginBottom="60px"
            gap="60px"
          >
            {partners.map((partner) => (
              <Box
                key={partner.alt}
                width={isLargerThan750 ? '200px' : undefined}
              >
                <Img
                  src={partner.url}
                  alt={partner.alt}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
