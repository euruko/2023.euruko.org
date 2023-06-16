import { useEffect } from 'react';

import {
  Box,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
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
            Privacy Policy
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
            A company UAB “Cybergizer Europe” established under the laws of the
            Republic of Lithuania with a registration number 304590715 and
            business seat at Kastonu str. 27 K1, Pagiriai, Vilnius region
            (hereinafter referred as “Cybergizer”) region being an organizer of
            the conference EURUKO’23 which shall take place on 21 – 23
            September, 2023 (hereinafter referred as “EURUKO’23”) would like to
            make you aware of your personal data processing in relation with
            participation in EURUKO’23.
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
            What kind of personal data may be processed, for what purposes and
            legal grounds, what retentions periods are applied, to whom your
            personal data might be transferred in relation with attendance at
            EURUKO’23?
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
            Your attendance at EURUKO’23 requires your personal data processing.
            Personal data processing purpose, legal grounds, retention period,
            data transference depend on your role in EURUKO’23.
          </Text>
          <UnorderedList
            width="100%"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
          >
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              In case you are an ordinary participant of EURUKO’23 following
              personal data processing might be applied: For ticket purchase and
              ticket, invoice sending via email, important information about
              EURUKO’23 (e. g. sending of link to join an online EURUKO’23,
              sending guidance how to find a venue of EURUKO’23) your name,
              surname, email address shall be processed based on the Art. 6(b)
              of the GDPR. If you will not provide this information, you will
              not be able to purchase a ticket and attend at EURUKO’23. Personal
              data might be processed by ticketing platform (more details will
              follow when tickets purchasing system will be opened) located in
              the European Union. A retention period is 10 years once EURUKO’23
              is completed.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For ordering of shuttles, hotels and contacting you in case when
              you are not in an agreed place or any other reasons related with
              mentions shuttles and accommodations reasons your name, surname,
              email address, phone number, flight / bus / train number shall be
              processed based on the Art. 6(b) of the GDPR. If you will not
              provide these data, Cybergizer won’t be able to arrange shuttles,
              hotels for you. Personal data might be processed together with
              hotels, transportation companies as joint controllers (more
              details will follow when final decisions of hotels, transportation
              companies’ choice will be made). A retention period is 10 years
              once EURUKO’23 is completed.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              In order to have evidence of completed EURUKO’23 to Cybergizer’
              accountancy and sponsors, partners, an image of a person could be
              recorded in photos or videos materials based on the Art. 6(c) of
              the GDPR and art. 11 of the Law on profit tax of the Republic of
              Lithuania. Personal data might be disclosed to State Tax
              Department. Personal data might be processed by photographers /
              videographers (more details will follow once particular vendors
              will be chosen) and EURUKO’23 sponsors, partners as data
              processors (more details will follow once sponsors, partners will
              be identified). A retention period is 10 years once EURUKO’23 is
              completed.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For preparation of Cybergizer or EURUKO’23 partners’ or sponsors’
              promotional material (portfolio) in relation with organized /
              sponsored events, a person image recorded in photos or videos
              materials during EURUKO’23 might be processed based on the Art.
              6(f) of the GDPR. The legitimate interest is related with ability
              to show clients, governmental bodies that Cybergizer or EURUKO’23
              sponsors / partners are reliable partners for business operations
              and are transparent. Personal data might be disclosed at
              Cybergizer website, social networks accounts, portfolio material
              sent to existing or potential clients. Personal data might be
              transferred to EURUKO’23 as event sponsors, partners (more details
              will follow once sponsors, partners will be identified) and
              processed by them as independent controllers. A retention period
              is 10 years once EURUKO’23 is completed.
            </ListItem>
          </UnorderedList>
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
            In case you are a speaker of EURUKO’23 following personal data
            processing might be applied:
          </Text>
          <UnorderedList
            width="100%"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
          >
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              In order to promote the speaker and his/her represented project,
              company etc., person’s name, surname, photo, short introduction
              related with professional experience (e.g. projects, workplaces,
              titles) might be processed based on the Art. 6 (a) of the GDPR. If
              you will withdraw your consent prior EURUKO’23 your information
              would not be published again in new or the same channels as
              reminder. Personal data might be disclosed at website{' '}
              <Link
                href="https://2023.euruko.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://2023.euruko.org/
              </Link>{' '}
              (hereinafter referred as to the “Website”), social media and other
              media / communication channels. A retention period is 10 years
              once EURUKO’23 is completed.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For evidence of completed EURUKO’23, which could be given
              Cybergizer’ accountancy and sponsors, partners, an image of a
              person recorded in photos or videos materials may be processed
              based on the Art. 6(c) of the GDPR and art. 11 of the Law on
              profit tax of the Republic of Lithuania. Personal data might be
              disclosed to State Tax Department. Personal data might be
              processed by photographers / videographers (more details will
              follow once particular vendors will be chosen) and EURUKO’23
              sponsors, partners as data processors (more details will follow
              once sponsors, partners will be identified). A retention period is
              10 years once EURUKO’23 is completed.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For a preparation of Cybergizer or EURUKO’23 partners’, sponsors’
              promotional material (portfolio) in relation with organized /
              sponsored events, an image of a person recorded in photos or
              videos material may be processed based on the Art. 6(f) of the
              GDPR. The legitimate interest is related with ability to show
              clients, governmental bodies that Cybergizer or EURUKO’23 sponsors
              / partners are reliable partners for business operations and are
              transparent. Personal data might be disclosed at Cybergizer
              website, social networks accounts, portfolio material sent to
              existing or potential clients. Personal data might be transferred
              to EURUKO’23 as event sponsors, partners (more details will follow
              once sponsors, partners will be identified) and processed by them
              as independent controllers. A retention period is 10 years once
              EURUKO’23 is completed.
            </ListItem>
          </UnorderedList>
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
            In case you or an entity which you represent is sponsor, partner of
            EURUKO’23 following personal data processing might be applied:
          </Text>
          <UnorderedList
            width="100%"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
          >
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For sponsorship / partnership contract drafting, accountancy
              documents issuance and sending, management of issues related with
              sponsorship / partnership, following data might be processed:
              <UnorderedList width="100%">
                <ListItem
                  textAlign="left"
                  lineHeight="120%"
                  letterSpacing="-0.02em"
                  padding="25px"
                  fontSize="21px"
                  fontWeight={500}
                  color="#9A9A9A"
                >
                  In case partner, sponsor is an individual person, person’s
                  name, surname, address, email address, phone number, amount of
                  sponsorship or partnership, tax identification number (TIN);
                </ListItem>
                <ListItem
                  textAlign="left"
                  lineHeight="120%"
                  letterSpacing="-0.02em"
                  padding="25px"
                  fontSize="21px"
                  fontWeight={500}
                  color="#9A9A9A"
                >
                  In case partner is a corporate, then person’s, who represents
                  a company which sponsoring or engaged in partnership regarding
                  EURUKO’23, name, surname, title, email address, phone number
                  might be processed.
                </ListItem>
                <ListItem
                  textAlign="left"
                  lineHeight="120%"
                  letterSpacing="-0.02em"
                  padding="25px"
                  fontSize="21px"
                  fontWeight={500}
                  color="#9A9A9A"
                >
                  In case partner, sponsor is an individual person, person’s
                  name, surname, address, email address, phone number, amount of
                  sponsorship or partnership, tax identification number (TIN);
                </ListItem>
              </UnorderedList>
              <Text
                width="100%"
                lineHeight="120%"
                letterSpacing="-0.02em"
                variant="regularText"
                fontSize="21px"
                fontWeight={500}
                color="#9A9A9A"
                textAlign="left"
              >
                For documents drafting, sending and managing other issues
                related with sponsorships / partnerships, mentioned personal
                data shall be processed based on the Art. 6(b) of the GDPR. If
                you will not provide this information, then Cybergizer won’t be
                able to accept sponsorship or partnership for EURUKO’23. A
                retention period is 10 years once EURUKO’23 is completed.
              </Text>
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For evidence of completed EURUKO’23 which could be given to
              Cybergizer’ accountancy and sponsors, partners, an image of a
              person recorded in photos or videos material may be processed
              based on the Art. 6(c) of the GDPR and art. 11 of the Law on
              profit tax of the Republic of Lithuania. Personal data might be
              disclosed to State Tax Department. Personal data might be
              processed by photographers / videographers (more details will
              follow once particular vendors will be chosen) and EURUKO’23
              sponsors, partners as data processors (more details will follow
              once sponsors, partners will be identified). A retention period is
              10 years once EURUKO’23 is completed.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              For a preparation of Cybergizer or EURUKO’23 partners’ or
              sponsors’ promotional material (portfolio) in relation with
              organized / sponsored events, an image of a person recorded in
              photos or videos material may be processed based on the Art. 6(f)
              of the GDPR. The legitimate interest is related with ability to
              show clients, governmental bodies that Cybergizer or EURUKO’23
              sponsors / partners are reliable partners for business operations
              and are transparent. Personal data might be disclosed at
              Cybergizer website, social networks accounts, portfolio material
              sent to existing or potential clients. Personal data might be
              transferred to EURUKO’23 as event sponsors, partners (more details
              will follow once sponsors, partners will be identified) and
              processed by them as independent controllers. A retention period
              is 10 years once EURUKO’23 is completed.
            </ListItem>
          </UnorderedList>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="white"
            textAlign="left"
          >
            What cookies are used on the Website and how to control them?
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
            A company UAB “Cybergizer Europe” established under the laws of the
            Republic of Lithuania with a registration number 304590715 and
            business seat at Kastonu str. 27 K1, Pagiriai, Vilnius region
            (hereinafter referred as “Cybergizer”) region being an organizer of
            the conference EURUKO’23 which shall take place on 21 – 23
            September, 2023 (hereinafter referred as “EURUKO’23”) would like to
            make you aware of your personal data processing in relation with
            participation in EURUKO’23.
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
            Information about particular cookies used on the Website is provided
            below:
          </Text>
          <UnorderedList
            width="100%"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
          >
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              Cookie called as _ga_* is a cookie provided by Google Analytics
              which stores and counts page views. The retention period is 1 year
              1 month 4 days.
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="25px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              Cookie called as _ga is a cookie provided by Google Analytics,
              which calculates visitor, session and campaign data and also keeps
              track of site usage for the site&#39;s analytics report. This
              cookie stores information anonymously and assigns a randomly
              generated number to recognize unique visitors. The retention
              period is 1 year 1 month 4 days.
            </ListItem>
          </UnorderedList>
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
            You may find more information how to control cookies on this site{' '}
            <Link
              href="https://www.aboutcookies.org/how-to-manage-and-delete-cookies"
              target="_blank"
              rel="noreferrer"
            >
              https://www.aboutcookies.org/how-to-manage-and-delete-cookies
            </Link>{' '}
            or in a website of your browser provider. To avoid any doubts,
            Cybergizer is not liable for a correct information provision how to
            manage cookies indicated in third parties’ sites.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="white"
            textAlign="left"
          >
            What cookies are used on the Website and how to control them?
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
            Information about particular cookies used on the Website is provided
            below:
          </Text>
          <UnorderedList
            width="100%"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
          >
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="10px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              to request an access to your personal data;
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="10px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              to request a rectification or erasure of personal data;
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="10px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              to request a restriction of personal data processing concerning to
              you or to object to processing;
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="10px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              to data portability;
            </ListItem>
            <ListItem
              textAlign="left"
              lineHeight="120%"
              letterSpacing="-0.02em"
              padding="10px"
              fontSize="21px"
              fontWeight={500}
              color="#9A9A9A"
            >
              to withdraw consent at any time, without affecting the lawfulness
              of processing based on consent before its withdrawal.
            </ListItem>
          </UnorderedList>
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
            In case you want to implement above mentioned your rights or discuss
            about your personal data processing kindly please, contact us by
            email <a href="mailto:info@cybergizer.eu">info@cybergizer.eu</a> We
            would be more than happy to reply into your any questions related
            with data processing.
          </Text>
          <Text
            width="100%"
            lineHeight="120%"
            letterSpacing="-0.02em"
            padding={isLargerThan750 ? '25px' : '25px 130px'}
            variant="regularText"
            fontSize="21px"
            fontWeight={500}
            color="white"
            textAlign="left"
          >
            How to lodge a complaint with a supervisory authority?
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
            Despite Cybergizer is encouraged you to discuss any your concerns
            related with data processing, you may wish to lodge a complaint with
            Lithuanian State Data Protection Inspectorate located at L. Sapiegos
            str. 17, LT-10312 Vilnius. More detailed information could be found
            on a website{' '}
            <Link
              href="https://vdai.lrv.lt/en/."
              target="_blank"
              rel="noreferrer"
            >
              https://vdai.lrv.lt/en/.
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

Component.displayName = 'SpeakersRoute';
