import { Box, Flex, Img, Text, Link, useMediaQuery } from '@chakra-ui/react';

import { type SponsorType } from '../assets';

export const OnlineCategoryList = ({
  onlineList
}: {
  onlineList: SponsorType[];
}) => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');
  const [isLargerThan1650] = useMediaQuery('(max-width: 1650px)');

  return (
    <Flex
      position="relative"
      wrap="wrap"
      justifyContent="space-around"
      maxW={isLargerThan1650 ? '80%' : undefined}
      minW={isLargerThan750 ? '300px' : '365px'}
      border="1px solid #C88EF4"
      borderRadius="60px"
      backgroundColor="#D9D9D9"
      boxShadow="0px 0px 60px 0px rgba(200, 142, 244, 0.20)"
    >
      <Box
        position="absolute"
        top="-25px"
        zIndex={99}
        p="4px 12px 7px 12px"
        border="1px solid #C88EF4"
        borderRadius="62px"
        backgroundColor="#D9D9D9"
      >
        <Text
          fontSize="30px"
          fontWeight={500}
          color="#C88EF4"
          lineHeight="120%"
        >
          Online
        </Text>
      </Box>
      {onlineList.map((item) => (
        <Flex
          key={item.alt}
          h="380px"
          p="30px 70px"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="60px"
        >
          <Img
            src={item.logo}
            alt={item.alt}
            width={isLargerThan750 ? '125px' : undefined}
            height="140px"
          />
          <Link
            href={item.link}
            target="_blank"
            p="10px"
            background="#C88EF4"
            fontSize="21px"
            fontWeight={500}
            color="#000"
            borderRadius="30.75px"
            lineHeight="88.9%"
          >
            learn more
          </Link>
        </Flex>
      ))}
    </Flex>
  );
};
