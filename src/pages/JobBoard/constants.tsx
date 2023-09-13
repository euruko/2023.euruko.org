import ioki from './assets/ioki-logo_claim.png';

type JOB = {
  img: string;
  title: string;
  description: string;
  link: string;
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
      title: 'Ruby on Rails Developers and Site Reliability Engineers (f/m/d)',
      description:
        'Join our team working on real life solutions for the future public transport.',
      link: 'https://jobs.ioki.com/o/senior-backend-engineer-ruby-on-rails-fmd'
    }
  ],
  silver: [],
  bronze: []
};
