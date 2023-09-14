import ioki from '../Main/components/Sponsors/assets/sponsorLogos/ioki-logo_claim.png';
import Meister from '../Main/components/Sponsors/assets/sponsorLogos/Meister-logo.png';

type JOB = {
  img: string;
  title: string;
  description: string;
  link: string;
  alt: string;
};

export const JOBS: {
  ruby?: JOB[];
  gold?: JOB[];
  silver?: JOB[];
  bronze?: JOB[];
} = {
  ruby: [],
  gold: [
    {
      img: ioki,
      alt: 'Ioki logo',
      title: 'Ruby on Rails Developers and Site Reliability Engineers (f/m/d)',
      description:
        'Join our team working on real life solutions for the future public transport.',
      link: 'https://jobs.ioki.com/o/senior-backend-engineer-ruby-on-rails-fmd'
    }
  ],
  silver: [
    {
      img: Meister,
      alt: 'Meister logo',
      title: 'Senior Ruby/Full-Stack Engineer',
      description:
        'You see it, you merge it! We’re bringing our award-winning productivity tools together but we can’t do it without you! If you have a passion for Ruby and some love for React, this role is for you!',
      link: 'https://www.meisterlabs.com/jobs/senior-ruby-full-stack-engineer/'
    }
  ],
  bronze: []
};
