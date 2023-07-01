import { Box, Flex, Img, Text, Link, useMediaQuery } from '@chakra-ui/react';

import { type SponsorType } from '../assets';

export const RubyCategoryList = ({ rubyList }: { rubyList: SponsorType[] }) => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      gap="20px"
      w="95%"
    >
      {rubyList.map((item) => (
        <Flex
          key={item.alt}
          position="relative"
          w={isLargerThan750 ? '80%' : '600px'}
          p="60px 0"
          mt="30px"
          borderRadius="45px"
          boxShadow="0px 0px 60px 0px rgba(255, 116, 189, 0.30)"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          gap="60px"
        >
          <Box
            position="absolute"
            top="-25px"
            zIndex={99}
            p="4px 12px 7px 12px"
            border="1px solid #FF74BD"
            borderRadius="62px"
            backgroundColor="#D9D9D9"
          >
            <Text
              fontSize="30px"
              fontWeight={500}
              color="#FF74BD"
              lineHeight="120%"
            >
              Ruby
            </Text>
          </Box>
          <Img
            src={item.logo}
            alt={item.alt}
            width={isLargerThan750 ? '125px' : undefined}
            height="140px"
          />
          <Text
            w="80%"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            lineHeight="120%"
          >
            {item.description}
          </Text>
          <Link
            href={item.link}
            p="10px"
            background="#FF74BD"
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
