import { Box, Flex, Img, Text, Link, useMediaQuery } from '@chakra-ui/react';

import { type SponsorType } from '../assets';

export const BronzeCategoryList = ({
  bronzeList
}: {
  bronzeList: SponsorType[];
}) => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      gap="20px"
    >
      {bronzeList.map((item) => (
        <Flex
          key={item.alt}
          position="relative"
          w={isLargerThan750 ? '135px' : '365px'}
          h={isLargerThan750 ? '145px' : '380px'}
          p={isLargerThan750 ? '11.5px' : '30px'}
          mt="30px"
          borderRadius={isLargerThan750 ? '30.669px' : '45px'}
          boxShadow={
            isLargerThan750
              ? '1.9168357849121094px 1.9168357849121094px 7.6673431396484375px 0px rgba(0, 0, 0, 0.08)'
              : '5px 5px 20px 0px rgba(0, 0, 0, 0.08)'
          }
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={isLargerThan750 ? '20px' : '60px'}
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
            border="1px solid #9A9A9A"
            borderRadius="62px"
            backgroundColor="#D9D9D9"
          >
            <Text
              fontSize={isLargerThan750 ? '11.2px' : '30px'}
              fontWeight={500}
              color="#9A9A9A"
              lineHeight="120%"
            >
              Bronze
            </Text>
          </Box>
          <Flex
            minH={isLargerThan750 ? '53.671px' : '140px'}
            alignItems="center"
            justifyContent="center"
          >
            <Img
              src={item.logo}
              alt={item.alt}
              mt={isLargerThan750 ? '10px' : undefined}
              maxH={isLargerThan750 ? '53.671px' : '140px'}
            />
          </Flex>
          <Link
            href={item.link}
            p={isLargerThan750 ? '4px' : '10px'}
            background="#9A9A9A"
            fontSize={isLargerThan750 ? '12px' : '21px'}
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
