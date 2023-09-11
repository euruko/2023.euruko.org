import { Box, Flex, Img, Text, Link, useMediaQuery } from '@chakra-ui/react';

import { type SponsorType } from '../assets';

export const GoldCategoryList = ({ goldList }: { goldList: SponsorType[] }) => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      gap="20px"
      w="95%"
    >
      {goldList.map((item) => (
        <Flex
          key={item.alt}
          position="relative"
          w={isLargerThan750 ? '280px' : '750px'}
          p={isLargerThan750 ? '20px 0' : '60px 0'}
          mt="30px"
          borderRadius="45px"
          boxShadow={
            isLargerThan750
              ? '0px 0px 22.399999618530273px 0px rgba(43, 186, 126, 0.20);'
              : '0px 0px 60px 0px rgba(43, 186, 126, 0.20)'
          }
          alignItems="center"
          justifyContent="space-between"
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
            border="1px solid #2BBA7E"
            borderRadius="62px"
            backgroundColor="#D9D9D9"
          >
            <Text
              fontSize={isLargerThan750 ? '11.2px' : '30px'}
              fontWeight={500}
              color="#2BBA7E"
              lineHeight="120%"
            >
              Gold
            </Text>
          </Box>
          <Flex
            minH={isLargerThan750 ? '78px' : '140px'}
            alignItems="center"
            justifyContent="center"
          >
            <Img
              src={item.logo}
              alt={item.alt}
              maxH={isLargerThan750 ? '78px' : '140px'}
            />
          </Flex>
          {item.description && (
            <Text
              w="90%"
              fontSize={isLargerThan750 ? '12px' : '21px'}
              fontWeight={500}
              color="#9A9A9A"
              lineHeight="120%"
            >
              {item.description}
            </Text>
          )}
          <Link
            href={item.link}
            p={isLargerThan750 ? '4px' : '10px'}
            background="#2BBA7E"
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
