import { Box, Text } from '@chakra-ui/react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const Video = ({
  videoId,
  videoTitle
}: {
  videoId: string;
  videoTitle: string;
}) => (
  <Box
    minW="300px"
    w={{
      base: '300px',
      sm: '80%',
      lg: '45%'
    }}
  >
    <Text
      textAlign="start"
      textTransform="uppercase"
      fontSize={{
        base: '18px',
        sm: '3vw',
        xl: '33px'
      }}
    >
      {videoTitle}
    </Text>
    <LiteYouTubeEmbed
      id={videoId}
      title="Youtube video"
    />
  </Box>
);
