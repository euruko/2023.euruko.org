import { Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import leftArrow from '~/shared/assets/blackLeftArrow.svg';
import rightArrow from '~/shared/assets/blackRightArrow.svg';
import { ArrowIcon } from '~/shared/components/ArrowIcon';

import { speakers } from './assets';
import { PanelDiscussionCard } from './components/PanelDiscussionCard';
import { SpeakerCard } from './components/SpeakerCard';

export const Speakers = () => {
  const [isLargerThan1550] = useMediaQuery('(max-width: 1550px)');
  const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: (
      <ArrowIcon
        icon={rightArrow}
        side="right"
      />
    ),
    prevArrow: (
      <ArrowIcon
        icon={leftArrow}
        side="left"
      />
    )
  };

  const containerSliderWidth = (() => {
    switch (true) {
      case isLargerThan1550 &&
        isLargerThan1200 &&
        isLargerThan850 &&
        isLargerThan400:
        return '300px';
      case isLargerThan1550 && isLargerThan1200 && isLargerThan850:
        return '400px';
      case isLargerThan1550 && isLargerThan1200:
        return '770px';
      case isLargerThan1550:
        return '1135px';
      default:
        return '100%';
    }
  })();

  return (
    <Flex
      id="speakers"
      pb="90px"
      background="radial-gradient(50% 50% at 50% 50%, #2BBA7E 0%, rgba(0, 0, 0, 0) 100%)"
      backgroundPosition="center 0px"
      backgroundRepeat="no-repeat"
    >
      <Flex
        maxW="1520px"
        margin={isLargerThan1200 ? '0px auto' : '90px auto 0 auto'}
        justifyContent="center"
        gap={isLargerThan850 ? '60px' : '90px'}
        alignItems="center"
        flexDirection="column"
        wrap="nowrap"
      >
        <Heading
          variant="regularHeading"
          fontSize={isLargerThan850 ? '40px' : '84px'}
          margin={isLargerThan1200 ? '40px' : undefined}
          fontWeight={600}
          maxWidth="750px"
        >
          Speakers
        </Heading>
        <div
          style={{
            width: containerSliderWidth,
            margin: '0 auto'
          }}
        >
          <Slider {...settings}>
            {speakers.map((item) => (
              <SpeakerCard
                speaker={item}
                key={item.lastName}
              />
            ))}
            <PanelDiscussionCard />
          </Slider>
        </div>
      </Flex>
    </Flex>
  );
};
