import GPTransco from './sponsorLogos/GP-transco-logo.png';
import JetBrains from './sponsorLogos/JetBrains_logo.png';
import Kisko from './sponsorLogos/Kisko-logo.png';
import Meister from './sponsorLogos/Meister-logo.png';
import OPenRoad from './sponsorLogos/OPenRoad-logo.png';
import SeQura from './sponsorLogos/SeQura_logo.png';
import softswiss from './sponsorLogos/softswiss-logo.png';

export const rubyList = [];
export const goldList = [];
export const silverList = [
  { logo: Meister, link: 'https://www.meisterlabs.com/', alt: 'Meister logo' },
  {
    logo: JetBrains,
    link: 'https://www.jetbrains.com/',
    alt: 'JetBrains logo'
  },
  {
    logo: SeQura,
    link: 'https://en.sequra.com/',
    alt: 'SeQura logo'
  }
];
export const bronzeList = [
  { logo: Kisko, link: 'https://www.kiskolabs.com/fi/', alt: 'Kisko logo' },
  {
    logo: GPTransco,
    link: 'https://www.gptransco.com/',
    alt: 'GP Transco logo'
  },
  {
    logo: OPenRoad,
    link: 'https://www.openroadtms.com/',
    alt: 'OPenRoad logo'
  },
  {
    logo: softswiss,
    link: 'https://www.softswiss.com/',
    alt: 'SoftSwiss logo'
  }
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
