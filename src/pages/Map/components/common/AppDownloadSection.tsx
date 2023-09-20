import { Flex, Text } from '@chakra-ui/react';

import { ImageLink } from './Link';

export const AppDownloadSection = ({
  imgForApple,
  imgForGoogle,
  title,
  ariaLabelForGoogle,
  linkForGoogle,
  ariaLabelForApple,
  linkForApple,
  widthForTitle
}: {
  imgForApple: string;
  imgForGoogle: string;
  title: string;
  ariaLabelForGoogle: string;
  linkForGoogle: string;
  ariaLabelForApple: string;
  linkForApple: string;
  widthForTitle: string;
}) => (
  <Flex
    flex="1"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Text
      color="#000"
      fontSize={{
        base: '14px',
        md: '20px',
        lg: '30px'
      }}
      fontWeight={500}
      lineHeight="80%"
      letterSpacing="-0.06em"
      margin={{
        base: '0 auto 20px auto',
        md: '0 auto 40px auto'
      }}
      maxW={{
        base: '100%',
        md: widthForTitle
      }}
    >
      {title}
    </Text>
    <Flex
      gap="20px"
      flex="1"
    >
      <Flex
        gap="20px"
        flex="1"
      >
        <ImageLink
          ariaLabel={ariaLabelForGoogle}
          src={imgForGoogle}
          link={linkForGoogle}
        />
      </Flex>
      <Flex
        gap="20px"
        flex="1"
      >
        <ImageLink
          ariaLabel={ariaLabelForApple}
          src={imgForApple}
          link={linkForApple}
        />
      </Flex>
    </Flex>
  </Flex>
);
