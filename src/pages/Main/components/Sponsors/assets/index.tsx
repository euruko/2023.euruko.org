import Kisko from './sponsorLogos/Kisko-logo.png';
import Meister from './sponsorLogos/Meister-logo.png';

export const rubyList = [];
export const goldList = [];
export const silverList = [
  { logo: Meister, link: 'https://www.meisterlabs.com/', alt: 'Meister logo' }
];
export const bronzeList = [
  { logo: Kisko, link: 'https://www.kiskolabs.com/fi/', alt: 'Kisko logo' }
];
export const onlineList = [
  { logo: Kisko, link: 'https://www.kiskolabs.com/fi/', alt: 'Kisko logo' }
];

export type SponsorType = {
  logo: string;
  link: string;
  alt: string;
  description?: string;
};
