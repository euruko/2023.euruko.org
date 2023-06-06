import companyLogo from './assets/companyLogo.svg';

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
  ruby: [
    {
      img: companyLogo,
      title:
        'Senior Software Engineer - Repos Senior Software Engineer - Repos Senior Software Engineer - Repos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis vehicula risus sed placerat. Suspendisse mauris sapien, porttitor varius congue vitae, finibus ut odio. Aenean interdum, augue ac accumsan tempus, ipsum tortor pulvinar neque, eget malesuada massa justo at urna. Proin efficitur vel dui non facilisis. Pellentesque molestie mauris vel nisi vulputate, et eleifend odio sodales. Aliquam lobortis dapibus tortor nec tincidunt. Pellentesque efficitur quam vitae dui pharetra, at imperdiet nisi blandit. Nam venenatis sapien auctor consectetur elementum. Suspendisse vitae aliquam. Looooooooong text here.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis vehicula risus sed placerat. Suspendisse mauris sapien, porttitor varius congue vitae, finibus ut odio. Aenean interdum, augue ac accumsan tempus, ipsum tortor pulvinar neque, eget malesuada massa justo at urna. Proin efficitur vel dui non facilisis. Pellentesque molestie mauris vel nisi vulputate, et eleifend odio sodales. Aliquam lobortis dapibus tortor nec tincidunt. Pellentesque efficitur quam vitae dui pharetra, at imperdiet nisi blandit. Nam venenatis sapien auctor consectetur elementum. Suspendisse vitae aliquam.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis vehicula risus sed placerat. Suspendisse mauris sapien, porttitor varius congue vitae, finibus ut odio. Aenean interdum, augue ac accumsan tempus, ipsum tortor pulvinar neque, eget malesuada massa justo at urna. Proin efficitur vel dui non facilisis. Pellentesque molestie mauris vel nisi vulputate, et eleifend odio sodales. Aliquam lobortis dapibus tortor nec tincidunt. Pellentesque efficitur quam vitae dui pharetra, at imperdiet nisi blandit. Nam venenatis sapien auctor consectetur elementum. Suspendisse vitae aliquam.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis vehicula risus sed placerat. Suspendisse mauris sapien, porttitor varius congue vitae, finibus ut odio. Aenean interdum, augue ac accumsan tempus, ipsum tortor pulvinar neque, eget malesuada massa justo at urna. Proin efficitur vel dui non facilisis. Pellentesque molestie mauris vel nisi vulputate, et eleifend odio sodales. Aliquam lobortis dapibus tortor nec tincidunt. Pellentesque efficitur quam vitae dui pharetra, at imperdiet nisi blandit. Nam venenatis sapien auctor consectetur elementum. Suspendisse vitae aliquam.',
      link: 'https://www.google.com/'
    }
  ],
  gold: [
    {
      img: companyLogo,
      title:
        'Senior Software Engineer - Repos Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    }
  ],
  silver: [
    {
      img: companyLogo,
      title:
        'Senior Software Engineer - Repos Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    }
  ],
  bronze: [
    {
      img: companyLogo,
      title:
        'Senior Software Engineer - Repos Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    },
    {
      img: companyLogo,
      title: 'Senior Software Engineer - Repos',
      description:
        'This role will lead the API team, a dynamic and distributed group of engineers responsible for the interfaces everyone uses to integrate with GitHub.',
      link: 'https://www.google.com/'
    }
  ]
};
