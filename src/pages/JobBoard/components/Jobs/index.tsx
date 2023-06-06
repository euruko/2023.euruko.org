import { Flex, Heading, Text, Center, Img, Button } from '@chakra-ui/react';

import { JOBS } from '../../constants';

const HeadingStyles = {
  as: 'h5',
  font: 'Comic Sans',
  variant: 'regularHeading',
  fontSize: '30px',
  fontWeight: 500,
  lineHeight: '120%',
  letterSpacing: '-0.02em',
  textTransform: 'none',
  maxW: '500px',
  m: '30px 0px',
  noOfLines: 2
};

export const Jobs = () => (
  <>
    {JOBS.ruby && JOBS.ruby.length > 0 && (
      <>
        <Text
          mt="35px"
          mb="30px"
          variant="jobHeadingText"
        >
          Ruby
        </Text>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          color="black"
          gap="20px"
          justifyContent="center"
        >
          {JOBS.ruby.map((job) => (
            <Flex
              key={job.link}
              maxW="750px"
              background="#D9D9D9"
              border="2px solid #FF74BD"
              borderRadius="80px"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              p="35px"
              boxShadow="0px 0px 25px #FF74BD;"
            >
              <Center maxH="100px">
                <Img
                  src={job.img}
                  maxH="100px"
                />
              </Center>
              <Heading
                variant="regularHeading"
                as="h5"
                sx={HeadingStyles}
              >
                {job.title}
              </Heading>
              <Text
                fontWeight={500}
                fontSize="21px"
                lineHeight="140%"
                letterSpacing="-0.02em"
                color="#9A9A9A"
                variant="regularText"
                noOfLines={9}
              >
                {job.description}
              </Text>
              <Button
                target="_blank"
                as="a"
                href={job.link}
                variant="rubyButton"
                mt="25px"
                mb="5px"
              >
                View
              </Button>
            </Flex>
          ))}
        </Flex>
      </>
    )}
    {JOBS.gold && JOBS.gold.length > 0 && (
      <>
        <Text
          mt="180px"
          mb="30px"
          variant="jobHeadingText"
        >
          Gold
        </Text>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          color="black"
          gap="20px"
          justifyContent="center"
        >
          {JOBS.gold.map((job) => (
            <Flex
              key={job.link}
              maxW="493px"
              background="#D9D9D9"
              borderRadius="80px"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              p="35px"
              boxShadow="0px 0px 25px #2BBA7E"
            >
              <Center maxH="100px">
                <Img
                  src={job.img}
                  maxH="100px"
                />
              </Center>
              <Heading
                variant="regularHeading"
                as="h5"
                sx={HeadingStyles}
              >
                {job.title}
              </Heading>
              <Text
                fontWeight={500}
                fontSize="21px"
                lineHeight="140%"
                letterSpacing="-0.02em"
                color="#9A9A9A"
                variant="regularText"
                noOfLines={4}
              >
                {job.description}
              </Text>
              <Button
                target="_blank"
                as="a"
                href={job.link}
                variant="notRubyButton"
                backgroundColor="#2BBA7E"
                mt="30px"
                mb="5px"
              >
                View
              </Button>
            </Flex>
          ))}
        </Flex>
      </>
    )}
    {JOBS.silver && JOBS.silver.length > 0 && (
      <>
        <Text
          mt="100px"
          mb="30px"
          variant="jobHeadingText"
        >
          Silver
        </Text>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          color="black"
          gap="20px"
          justifyContent="center"
        >
          {JOBS.silver.map((job) => (
            <Flex
              key={job.link}
              maxW="493px"
              background="#D9D9D9"
              borderRadius="80px"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              p="35px"
              boxShadow="0px 0px 25px #049ADB"
            >
              <Center maxH="100px">
                <Img
                  src={job.img}
                  maxH="100px"
                />
              </Center>
              <Heading
                variant="regularHeading"
                as="h5"
                sx={HeadingStyles}
              >
                {job.title}
              </Heading>
              <Text
                fontWeight={500}
                fontSize="21px"
                lineHeight="140%"
                letterSpacing="-0.02em"
                color="#9A9A9A"
                variant="regularText"
                noOfLines={4}
              >
                {job.description}
              </Text>
              <Button
                target="_blank"
                as="a"
                href={job.link}
                variant="notRubyButton"
                backgroundColor="#049ADB"
                mt="30px"
                mb="5px"
              >
                View
              </Button>
            </Flex>
          ))}
        </Flex>
      </>
    )}
    {JOBS.bronze && JOBS.bronze.length > 0 && (
      <>
        <Text
          mt="100px"
          mb="30px"
          variant="jobHeadingText"
        >
          Bronze
        </Text>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          color="black"
          gap="20px"
          justifyContent="center"
        >
          {JOBS.bronze.map((job) => (
            <Flex
              key={job.link}
              maxW="493px"
              background="#D9D9D9"
              borderRadius="80px"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              p="35px"
              boxShadow="0px 0px 25px #9e9e9e"
            >
              <Center maxH="100px">
                <Img
                  src={job.img}
                  maxH="100px"
                />
              </Center>
              <Heading
                variant="regularHeading"
                as="h5"
                sx={HeadingStyles}
              >
                {job.title}
              </Heading>
              <Text
                fontWeight={500}
                fontSize="21px"
                lineHeight="140%"
                letterSpacing="-0.02em"
                color="#9A9A9A"
                variant="regularText"
                noOfLines={4}
              >
                {job.description}
              </Text>
              <Button
                target="_blank"
                as="a"
                href={job.link}
                variant="notRubyButton"
                backgroundColor="#606060"
                mt="30px"
                mb="5px"
              >
                View
              </Button>
            </Flex>
          ))}
        </Flex>
      </>
    )}
  </>
);
