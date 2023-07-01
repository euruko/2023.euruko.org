import { Box, Flex, Img, Text, Link, useMediaQuery } from '@chakra-ui/react';

import { type SponsorType } from '../assets';

export const SilverCategoryList = ({
  silverList
}: {
  silverList: SponsorType[];
}) => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      gap="20px"
    >
      {silverList.map((item) => (
        <Flex
          key={item.alt}
          position="relative"
          w={isLargerThan750 ? '320px' : '493px'}
          h="380px"
          p="30px"
          mt="30px"
          borderRadius="45px"
          boxShadow="5px 5px 20px 0px rgba(0, 0, 0, 0.08)"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="60px"
        >
          <Box
            position="absolute"
            top="-25px"
            zIndex={99}
            p="4px 12px 7px 12px"
            border="1px solid #049ADB"
            borderRadius="62px"
            backgroundColor="#D9D9D9"
          >
            <Text
              fontSize="30px"
              fontWeight={500}
              color="#049ADB"
              lineHeight="120%"
            >
              Silver
            </Text>
          </Box>
          <Img
            src={item.logo}
            alt={item.alt}
            width={isLargerThan750 ? '125px' : undefined}
            height="140px"
          />
          <Link
            href={item.link}
            p="10px"
            background="#049ADB"
            fontSize="21px"
            fontWeight={500}
            color="#000"
            borderRadius="30.75px"
            lineHeight="88.9%"
            target="_blank"
          >
            learn more
          </Link>
        </Flex>
      ))}
    </Flex>
  );
};
