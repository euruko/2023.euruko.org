import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const regularText = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  lineHeight: '120%',
  letterSpacing: '-0.02em',
  textAlign: 'center'
});

const jobHeadingText = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  lineHeight: '120%',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '42px',
  color: '#606060'
});

const clockText = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  textTransform: 'uppercase',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '106%',
  textAlign: 'center',
  color: 'black'
});

const clockNumeral = defineStyle({
  fontFamily: `'Helvetica', sans-serif`,
  fontWeight: 400,
  fontSize: '56px',
  lineHeight: '110%',
  letterSpacing: '-0.02em',
  color: 'black'
});

const regularHeading = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  textAlign: 'center',
  textTransform: 'uppercase'
});

const navLink = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  color: '#606060',
  fontWeight: 500,
  lineHeight: '90%',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  fontSize: '24px',
  alignItems: 'center'
});

const mobileNavLink = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  color: 'black',
  textTransform: 'uppercase',
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  textAlign: 'center',
  fontSize: '42px'
});

const blackButton = defineStyle({
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  fontSize: '42px',
  backgroundColor: 'black',
  color: '#D9D9D9',
  textTransform: 'uppercase',
  borderRadius: '45px'
});

const whiteButton = defineStyle({
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  fontSize: '42px',
  textTransform: 'uppercase',
  backgroundColor: '#D9D9D9',
  color: 'black',
  borderRadius: '45px'
});

const linkButton = defineStyle({
  fontWeight: 500,
  lineHeight: '120%',
  letterSpacing: '-0.02em',
  fontSize: '27px',
  border: '1px solid black',
  borderRadius: '40px',
  maxWidth: '328px',
  padding: '28px',
  textDecoration: 'underline'
});

const rubyButton = defineStyle({
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.02em',
  color: 'black',
  fontSize: '21px',
  borderRadius: '30px',
  backgroundColor: '#FF74BD',
  width: '235px',
  padding: '30px'
});

const notRubyButton = defineStyle({
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.02em',
  color: 'black',
  fontSize: '21px',
  borderRadius: '30px',
  width: '110px',
  padding: '20px'
});

export const theme = extendTheme({
  components: {
    Text: defineStyleConfig({
      variants: {
        regularText,
        clockText,
        clockNumeral,
        jobHeadingText
      }
    }),
    Heading: defineStyleConfig({
      variants: { regularHeading }
    }),
    Link: defineStyleConfig({
      variants: { navLink, mobileNavLink }
    }),
    Button: defineStyleConfig({
      variants: {
        blackButton,
        linkButton,
        whiteButton,
        rubyButton,
        notRubyButton
      }
    })
  },
  fonts: {
    body: `'Syne', sans-serif`
  }
});
