import { Box, Flex, Img, Text, Link, useMediaQuery } from '@chakra-ui/react';

import { type SponsorType } from '../assets';

export const OnlineCategoryList = ({
  onlineList
}: {
  onlineList: SponsorType[];
}) => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');
  const [isLargerThan1350] = useMediaQuery('(max-width: 1350px)');

  return (
    <Flex
      position="relative"
      wrap="wrap"
      justifyContent="center"
      maxW={isLargerThan1350 ? '90%' : undefined}
      minW={isLargerThan750 ? '100px' : '365px'}
      border="1px solid #C88EF4"
      borderRadius={isLargerThan750 ? '25px' : '60px'}
      backgroundColor="#D9D9D9"
      boxShadow="0px 0px 60px 0px rgba(200, 142, 244, 0.20)"
      mt="30px"
    >
      <Box
        position="absolute"
        top={isLargerThan750 ? '-9px' : '-25px'}
        zIndex={99}
        p={
          isLargerThan750
            ? '1.493px 9.213px 3.053px 8.96px'
            : '4px 12px 7px 12px'
        }
        border="1px solid #C88EF4"
        borderRadius="62px"
        backgroundColor="#D9D9D9"
      >
        <Text
          fontSize={isLargerThan750 ? '11.2px' : '30px'}
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
          h={isLargerThan750 ? undefined : '380px'}
          p={isLargerThan750 ? '20px' : '30px 70px'}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={isLargerThan750 ? '10px' : '60px'}
        >
          <Img
            src={item.logo}
            alt={item.alt}
            mt={isLargerThan750 ? '10px' : undefined}
            width={isLargerThan750 ? '47.921px' : '125px'}
            height={isLargerThan750 ? '53.671px' : '140px'}
          />
          <Link
            href={item.link}
            target="_blank"
            p={isLargerThan750 ? '4px' : '10px'}
            background="#C88EF4"
            fontSize={isLargerThan750 ? '12px' : '21px'}
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
