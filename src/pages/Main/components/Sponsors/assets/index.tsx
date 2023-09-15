import appSignal from './sponsorLogos/appSignal_logo.svg';
import GPTransco from './sponsorLogos/GP-transco-logo.png';
import ioki from './sponsorLogos/ioki-logo_claim.png';
import JetBrains from './sponsorLogos/JetBrains_logo.png';
import Kisko from './sponsorLogos/Kisko-logo.png';
import Meister from './sponsorLogos/Meister-logo.png';
import OPenRoad from './sponsorLogos/OPenRoad-logo.png';
import SeQura from './sponsorLogos/SeQura_logo.png';
import softswiss from './sponsorLogos/softswiss-logo.png';

export const rubyList = [];
export const goldList = [
  {
    logo: ioki,
    link: 'https://ioki.com/',
    alt: 'Ioki logo',
    description:
      'We create smart mobility solutions for the future and work with transport service operators, local government bodies and companies in urban and rural regions alike. Based in Frankfurt, we are the technology partner that designs needs-based and modern on-demand mobility services to take us towards a more sustainable future. Our approach to mobility is holistic and data based. With our mobility analyses, traffic plannings and our operating system for digital mobility, we accompany mobility providers through the mobility transition. Our ecological and economically efficient solutions for a strong public transport make us the market leader in Europe.'
  }
];
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
  },
  {
    logo: appSignal,
    link: 'https://www.appsignal.com/',
    alt: 'AppSignal logo'
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
