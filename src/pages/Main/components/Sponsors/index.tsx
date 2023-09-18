import { Box, Flex, Heading, Img, useMediaQuery } from '@chakra-ui/react';

import {
  bronzeList,
  drinkSponsorList,
  goldList,
  onlineList,
  rubyList,
  silverList
} from './assets';
import grab from './assets/grab.svg';
import { BronzeCategoryList } from './components/BronzeCategoryList';
import { GoldCategoryList } from './components/GoldCategoryList';
import { OnlineCategoryList } from './components/OnlineCategoryList';
import { RubyCategoryList } from './components/RubyCategoryList';
import { SilverCategoryList } from './components/SilverCategoryList';

export const Sponsors = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Box
      backgroundColor="#D9D9D9"
      pb={isLargerThan750 ? '60px' : '120px'}
    >
      <Flex
        maxW="1521px"
        m="0 auto"
        border="1px solid #D9D9D9"
        borderRadius="45px"
        justifyContent="space-between"
        alignItems="center"
        padding={isLargerThan750 ? '20px' : '60px'}
      >
        <Img
          src={grab}
          width={isLargerThan750 ? '60px' : undefined}
          alt="Grab Tickets"
          height={{
            base: '50px',
            md: '113px'
          }}
        />
        <Heading
          variant="regularHeading"
          fontSize={{
            base: '35px',
            md: '80px',
            lg: '120px'
          }}
          fontWeight={600}
          maxWidth="1005px"
          color="#000"
          textTransform="uppercase"
        >
          our sponsors
        </Heading>
        <Img
          src={grab}
          width={isLargerThan750 ? '60px' : undefined}
          alt="Grab Tickets"
          height={{
            base: '50px',
            md: '113px'
          }}
        />
      </Flex>
      <Flex
        maxW="1520px"
        margin={isLargerThan750 ? '0px auto' : '40px auto'}
        justifyContent="center"
        gap={isLargerThan750 ? '20px' : '100px'}
        alignItems="center"
        flexDirection="column"
        wrap="nowrap"
      >
        {rubyList.length > 0 && <RubyCategoryList rubyList={rubyList} />}
        {goldList.length > 0 && <GoldCategoryList goldList={goldList} />}
        {silverList.length > 0 && (
          <SilverCategoryList silverList={silverList} />
        )}
        {bronzeList.length > 0 && (
          <BronzeCategoryList bronzeList={bronzeList} />
        )}
        {onlineList.length > 0 && (
          <OnlineCategoryList onlineList={onlineList} />
        )}
        {drinkSponsorList.length > 0 && (
          <BronzeCategoryList
            bronzeList={drinkSponsorList}
            isDrinksSponsor
          />
        )}
      </Flex>
    </Box>
  );
};
