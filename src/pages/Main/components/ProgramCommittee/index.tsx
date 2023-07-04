import {
  Box,
  Flex,
  Heading,
  Img,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { programCommittee } from './assets';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

const ArrowIcon = ({
  onClick,
  icon,
  side,
  className,
  style
}: {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  icon: string;
  side: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [isLargerThan850] = useMediaQuery('(max-width: 800px)');

  const position = isLargerThan850 ? '-10px' : '-30px';

  return (
    <Img
      className={className}
      style={{
        ...style,
        height: isLargerThan850 ? '44px' : '84px',
        width: isLargerThan850 ? '44px' : '84px'
      }}
      src={icon}
      left={side === 'left' ? position : undefined}
      right={side === 'right' ? position : undefined}
      zIndex={99}
      alt="Next image"
      onClick={onClick}
    />
  );
};

export const ProgramCommittee = () => {
  const [isLargerThan1550] = useMediaQuery('(max-width: 1550px)');
  const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

  const headerFontSize = (() => {
    switch (true) {
      case isLargerThan1200 && isLargerThan850:
        return '45px';
      case isLargerThan1200:
        return '90px';
      default:
        return '110px';
    }
  })();

  const containerSliderSidth = (() => {
    switch (true) {
      case isLargerThan1550 &&
        isLargerThan1200 &&
        isLargerThan850 &&
        isLargerThan400:
        return '300px';
      case isLargerThan1550 && isLargerThan1200 && isLargerThan850:
        return '350px';
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
      backgroundColor="#D9D9D9"
      overflow="hidden"
    >
      <Flex
        maxW="1520px"
        margin="40px auto 120px auto"
        color="black"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex
          flexWrap="wrap"
          gap="20px"
          mt="60px"
          mb={isLargerThan850 ? '50px' : '115px'}
          alignItems="center"
          flexDirection="column"
          color="black"
          justifyContent="center"
          w="full"
        >
          <Heading
            w={isLargerThan850 ? 'full' : undefined}
            background="radial-gradient(50% 50.00% at 50% 50.00%, #FF74BD 0%, rgba(217, 217, 217, 0.00) 100%);"
            p="200px 0px"
            m="-200px 0px"
            variant="regularHeading"
            fontSize={headerFontSize}
            fontWeight={600}
          >
            program <br />
            committee
          </Heading>
        </Flex>
        <div
          style={{
            width: containerSliderSidth,
            margin: '0 auto'
          }}
        >
          <Slider {...settings}>
            {programCommittee.map((item) => (
              <div key={item.lastName}>
                <Flex
                  backgroundColor="#D9D9D9"
                  margin="0 10px"
                  p={isLargerThan400 ? '20px' : '20px'}
                  flexDirection="column"
                  borderRadius="40px"
                  border="1px solid #000"
                  h={isLargerThan400 ? '460px' : '540px'}
                  // maxW={isLargerThan400 ? '280px' : '600px'}
                >
                  <Img
                    w="150px"
                    h="160px"
                    alt={`Photo by ${item.firstName} ${item.lastName}`}
                    src={item.img}
                    margin="0 auto"
                  />
                  <Box>
                    <Heading
                      color="black"
                      variant="regularHeading"
                      fontSize="30px"
                      fontWeight={600}
                      marginBottom={isLargerThan400 ? '20px' : '30px'}
                    >
                      {item.firstName}
                      <br />
                      {item.lastName}
                    </Heading>
                    <Box
                      color="black"
                      fontSize={isLargerThan400 ? '14px' : '16px'}
                      fontWeight={500}
                      minH={isLargerThan400 ? '25px' : '50px'}
                      marginBottom={isLargerThan400 ? '20px' : '10px'}
                    >
                      {item.company}
                      {item.country && (
                        <Text
                          color="#606060"
                          fontSize="12px"
                        >
                          {item.country}
                        </Text>
                      )}
                    </Box>
                    <Text
                      color="#9A9A9A"
                      fontSize={isLargerThan400 ? '14px' : '16px'}
                      fontWeight={500}
                      lineHeight="120%"
                      minH={isLargerThan400 ? '100px' : '130px'}
                      marginBottom={isLargerThan400 ? '10px' : undefined}
                    >
                      {item.desctiption}
                    </Text>
                    <Box h="30px">
                      {item.link.title !== 'More' && (
                        <Link
                          p="10px 20px"
                          borderRadius="30.75px"
                          background="#000"
                          fontSize="14px"
                          fontWeight={500}
                          href={item.link.href}
                          color="white"
                          alignSelf="center"
                          marginBottom="30px"
                        >
                          {item.link.title}
                        </Link>
                      )}
                    </Box>
                  </Box>
                </Flex>
              </div>
            ))}
          </Slider>
        </div>
      </Flex>
    </Flex>
  );
};
