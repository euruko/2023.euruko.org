import { Link, Img } from '@chakra-ui/react';

export const ImageLink = ({
  link,
  ariaLabel,
  src
}: {
  link: string;
  ariaLabel: string;
  src: string;
}) => (
  <Link
    href={link}
    target="_blank"
    aria-label={ariaLabel}
  >
    <Img src={src} />
  </Link>
);
