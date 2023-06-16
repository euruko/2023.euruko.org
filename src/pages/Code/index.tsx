import { useEffect } from 'react';

import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box
      color="white"
      backgroundColor="black"
      textAlign="center"
    >
      <Nav />
      <Flex
        maxW="1540px"
        p="0 10px"
        margin="auto"
        flexDirection="column"
        color="#D9D9D9"
      >
        <Flex
          borderRadius="45px"
          justifyContent="space-around"
          flexWrap="wrap"
          mt="160px"
        >
          <Heading
            variant="regularHeading"
            color="white"
            textAlign="left"
            fontWeight={600}
            fontSize="42px"
            lineHeight="90%"
            letterSpacing="-0.06em"
            padding="51px 35px"
          >
            CODE OF CONDUCT
          </Heading>
          <Text
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            All attendees, speakers, sponsors and volunteers at our conference
            are required to agree with the following code of conduct. Organisers
            will enforce this code throughout the event. We expect cooperation
            from all participants to help ensure a safe environment for
            everybody.
          </Text>
          <Text
            width="100%"
            variant="regularHeading"
            color="white"
            textAlign="left"
            fontWeight={500}
            fontSize="32px"
            lineHeight="90%"
            letterSpacing="-0.06em"
            padding={isLargerThan750 ? '25px' : '35px 130px'}
          >
            The Quick Version
          </Text>
          <Text
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            Our conference is dedicated to providing a harassment-free
            conference experience for everyone, regardless of gender, gender
            identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion (or lack
            thereof), or technology choices. We do not tolerate harassment of
            conference participants in any form. Sexual language and imagery is
            not appropriate for any conference venue, including talks,
            workshops, parties, Twitter and other online media. Conference
            participants violating these rules may be sanctioned or expelled
            from the conference without a refund at the discretion of the
            conference organisers.
          </Text>
          <Text
            width="100%"
            variant="regularHeading"
            color="white"
            textAlign="left"
            fontWeight={500}
            fontSize="32px"
            lineHeight="90%"
            letterSpacing="-0.06em"
            padding={isLargerThan750 ? '25px' : '35px 130px'}
          >
            The Less Quick Version
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion,
            technology choices, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            Sponsors are also subject to the anti-harassment policy. In
            particular, sponsors should not use sexualised images, activities,
            or other material. Booth staff (including volunteers) should not use
            sexualised clothing/uniforms/costumes, or otherwise create a
            sexualised environment.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            If a participant engages in harassing behavior, the conference
            organisers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference with no
            refund.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            conference staff immediately. Conference staff can be identified as
            they’ll be wearing branded clothing and/or badges.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            Conference staff will be happy to help participants contact
            hotel/venue security or local law enforcement, provide escorts, or
            otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="#9A9A9A"
            textAlign="left"
          >
            We expect participants to follow these rules at conference and
            workshop venues and conference-related social events.
          </Text>
          <Flex
            width="100%"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            gap="5px"
          >
            <Text
              color="white"
              lineHeight="120%"
              letterSpacing="-0.02em"
              variant="regularText"
              fontSize="21px"
              fontWeight={700}
              textAlign="left"
            >
              Credit:
            </Text>
            <Link
              fontWeight={500}
              fontSize="21px"
              lineHeight="120%"
              color="#D9D9D9"
              href="https://confcodeofconduct.com/"
              textDecoration="underline"
              target="_blank"
            >
              Conference Code of Conduct
            </Link>
            (
            <Link
              fontWeight={500}
              fontSize="21px"
              lineHeight="120%"
              color="#D9D9D9"
              href="https://creativecommons.org/licenses/by/3.0/deed.en_US"
              textDecoration="underline"
              target="_blank"
            >
              CC BY 3.0
            </Link>
            )
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

Component.displayName = 'SpeakersRoute';
