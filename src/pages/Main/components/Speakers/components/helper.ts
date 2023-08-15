import { useMediaQuery } from '@chakra-ui/react';

type OptionsType = {
  isSmallText?: boolean;
  isBigText?: boolean;
};

export const useResponsiveStylesForCard = ({
  isSmallText,
  isBigText
}: OptionsType) => {
  const [isLargerThan1550] = useMediaQuery('(max-width: 1550px)');
  const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  const responsiveStyles = [
    {
      conditions: [
        isLargerThan1550,
        isLargerThan1200,
        isLargerThan850,
        isLargerThan400
      ],
      styles: {
        paddingContainer: '20px 10px',
        headerFontSize: '24px',
        aboutSpeakerFontSize: isBigText ? '16px' : '12px',
        imageHeight: '120px',
        imageWidth: '112px',
        talkFontSize: '12px',
        talkDescriptionFontSize: isBigText ? '18px' : '12px',
        aboutSpeakerMinHeight: '58px',
        talkMinHeight: '44px',
        talkDescriptionMinHeight: '130px',
        buttonHeight: '15px'
      }
    },
    {
      conditions: [isLargerThan1550, isLargerThan1200, isLargerThan850],
      styles: {
        paddingContainer: '30px 20px',
        imageHeight: '185px',
        imageWidth: '175px',
        headerFontSize: '30px',
        aboutSpeakerFontSize: isBigText ? '18px' : '12px',
        talkFontSize: isSmallText ? '18px' : '21px',
        talkDescriptionFontSize: isBigText ? '20px' : '14px',
        aboutSpeakerMinHeight: '44px',
        talkMinHeight: '87px',
        talkDescriptionMinHeight: '135px',
        buttonHeight: '24px'
      }
    },
    {
      conditions: [isLargerThan1550, isLargerThan1200],
      styles: {
        paddingContainer: '60px 20px',
        imageHeight: '321px',
        imageWidth: '301px',
        headerFontSize: '60px',
        aboutSpeakerFontSize: isBigText ? '24px' : '16px',
        talkFontSize: isSmallText ? '24px' : '35px',
        talkDescriptionFontSize: '21px',
        aboutSpeakerMinHeight: '58px',
        talkMinHeight: '86px',
        talkDescriptionMinHeight: '151px',
        buttonHeight: '40px'
      }
    },
    {
      conditions: [isLargerThan1550],
      styles: {
        paddingContainer: '50px 10px',
        imageHeight: '221px',
        imageWidth: '201px',
        headerFontSize: '50px',
        aboutSpeakerFontSize: isBigText ? '25px' : '14px',
        talkFontSize: isSmallText ? '17px' : '25px',
        talkDescriptionFontSize: isBigText ? '26px' : '16px',
        aboutSpeakerMinHeight: '55px',
        talkMinHeight: '60px',
        talkDescriptionMinHeight: '130px',
        buttonHeight: '40px'
      }
    },
    {
      conditions: [],
      styles: {
        paddingContainer: '60px 20px',
        imageHeight: '321px',
        imageWidth: '301px',
        headerFontSize: '60px',
        aboutSpeakerFontSize: isBigText ? '35px' : '16px',
        talkFontSize: isSmallText ? '24px' : '35px',
        talkDescriptionFontSize: isBigText ? '35px' : '21px',
        aboutSpeakerMinHeight: '60px',
        talkMinHeight: '84px',
        talkDescriptionMinHeight: '150px',
        buttonHeight: '40px'
      }
    }
  ];

  const activeBreakpoint =
    responsiveStyles.find((breakpoint) =>
      breakpoint.conditions.every((isCondition) => isCondition)
    ) || responsiveStyles[responsiveStyles.length - 1];

  return activeBreakpoint.styles;
};

export const useResponsiveStylesForCustomCard = () => {
  const [isLargerThan1550] = useMediaQuery('(max-width: 1550px)');
  const [isLargerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)');
  const [isLargerThan400] = useMediaQuery('(max-width: 400px)');

  const responsiveStyles = [
    {
      conditions: [
        isLargerThan1550,
        isLargerThan1200,
        isLargerThan850,
        isLargerThan400
      ],
      styles: {
        cardHeight: '491.58px',
        headerFontSize: '24px',
        imageHeight: '170px',
        imageWidth: '145px',
        talkFontSize: '12px',
        talkDescriptionFontSize: '12px',
        talkMinHeight: '44px',
        talkDescriptionMinHeight: '130px'
      }
    },
    {
      conditions: [isLargerThan1550, isLargerThan1200, isLargerThan850],
      styles: {
        cardHeight: '621.39px',
        imageHeight: '250px',
        imageWidth: '225px',
        headerFontSize: '30px',
        talkFontSize: '21px',
        talkDescriptionFontSize: '14px',
        talkMinHeight: '87px',
        talkDescriptionMinHeight: '135px'
      }
    },
    {
      conditions: [isLargerThan1550, isLargerThan1200],
      styles: {
        cardHeight: '937.69px',
        imageHeight: '399px',
        imageWidth: '374px',
        headerFontSize: '60px',
        talkFontSize: '35px',
        talkDescriptionFontSize: '21px',
        talkMinHeight: undefined,
        talkDescriptionMinHeight: undefined
      }
    },
    {
      conditions: [isLargerThan1550],
      styles: {
        cardHeight: '777.19px',
        imageHeight: '275px',
        imageWidth: '250px',
        headerFontSize: '50px',
        talkFontSize: '25px',
        talkDescriptionFontSize: '16px',
        talkMinHeight: '60px',
        talkDescriptionMinHeight: '130px'
      }
    },
    {
      conditions: [],
      styles: {
        cardHeight: '964.19px',
        imageHeight: '399px',
        imageWidth: '374px',
        headerFontSize: '60px',
        talkFontSize: '35px',
        talkDescriptionFontSize: '21px',
        talkMinHeight: '84px',
        talkDescriptionMinHeight: '150px'
      }
    }
  ];

  const activeBreakpoint =
    responsiveStyles.find((breakpoint) =>
      breakpoint.conditions.every((isCondition) => isCondition)
    ) || responsiveStyles[responsiveStyles.length - 1];

  return activeBreakpoint.styles;
};
