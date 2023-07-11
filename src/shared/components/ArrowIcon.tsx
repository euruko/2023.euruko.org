import { Img, useMediaQuery } from '@chakra-ui/react';

export const ArrowIcon = ({
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
