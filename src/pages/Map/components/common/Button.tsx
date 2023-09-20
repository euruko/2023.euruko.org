import { Link, Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({
  link,
  ariaLabel
}: {
  link: string;
  ariaLabel: string;
}) => (
  <Link
    href={link}
    target="_blank"
  >
    <ChakraButton
      w={{
        base: '144px',
        md: '316px'
      }}
      padding={{
        base: '10px',
        md: '40px'
      }}
      background="#000"
      variant="blackButton"
      borderRadius={{
        base: '15px',
        md: '45px'
      }}
      fontSize={{
        base: '14px',
        md: '30px'
      }}
      textDecoration="underline"
      aria-label={ariaLabel}
    >
      open in maps
    </ChakraButton>
  </Link>
);
