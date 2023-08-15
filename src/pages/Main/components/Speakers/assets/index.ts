import CarlaUrreaStabile from './speakers/Carla-Urrea-Stabile.png';
import HanaHarencarova from './speakers/Hana-Harencarova.png';
import HiroshiShibata from './speakers/Hiroshi-Shibata.png';
import HitoshiHasumi from './speakers/Hitoshi-Hasumi.png';
import IvoAnjo from './speakers/Ivo-Anjo.png';
import MasafumiOkura from './speakers/Masafumi-Okura.png';
import MatiasKorhonen from './speakers/Matias-Korhonen.png';
import ScottChacon from './speakers/Scott-Chacon.png';
// import StevenRBaker from './speakers/Steven-R-Baker.png';
import TomDeBruijn from './speakers/Tom-de-Bruijn.png';
import YukihiroMatzMatsumoto from './speakers/Yukihiro _Matz_ Matsumoto.png';

export const speakers = [
  {
    firstName: 'Yukihiro',
    lastName: 'Matsumoto',
    aboutSpeaker: 'The Creator of Ruby',
    img: YukihiroMatzMatsumoto,
    link: 'https://twitter.com/yukihiro_matz',
    talk: '30 Years of Ruby',
    talkDescription: 'History of Ruby and lessons we have learned from it.',
    type: 'Talk',
    isBigText: true
  },
  // {
  //   firstName: 'Steven',
  //   lastName: 'R.Baker',
  //   aboutSpeaker:
  //     'Steven has been helping individuals, teams, and organisations develop software with an eye towards quality and maintainability for over 25 years.',
  //   img: StevenRBaker,
  //   link: 'https://twitter.com/srbaker',
  //   talk: 'Reflections on a Reluctant Revolution',
  //   talkDescription: 'TBD!!!',
  // type:"Talk"
  // },
  {
    firstName: 'Scott',
    lastName: 'Chacon',
    aboutSpeaker:
      'GitHub and GitButler (a next generation version control client) co-founder, Pro Git author. Grew GitHub to 450 employees and sold it to Microsoft for $7.5B.',
    img: ScottChacon,
    link: 'https://twitter.com/chacon',
    talk: 'Ask Your Code',
    talkDescription:
      'At its core, what is version control and how does it help or hinder you in your daily life? Join Scott, cofounder of GitHub and author of the official Git book, in questioning everything you think you know about the tools that you depend on every day. Are we approaching the death of Git, or a new wave of amazing tools built on top of it to improve your workflows?',
    type: 'Talk'
  },
  {
    firstName: 'Carla',
    lastName: 'Urrea Stabile',
    aboutSpeaker:
      'Carla is a software engineer especialized in backend systems with more than 10 years of experience. She works as a Sr. Developer Advocate at Auth0 by Okta.',
    img: CarlaUrreaStabile,
    link: 'Https://twitter.com/carlastabile',
    talk: 'No passwords, no problem. More passwords, more problems: Move beyond passwords with WebAuthn and passkeys',
    talkDescription:
      'Imagine living in a world where passwords are no more. Using passwords sucks and implementing a system that deals with passwords, is phishing-resistant and secure is scary. What if you could go completely passwordless? Well, you can today thanks to WebAuthn and passkeys.',
    isSmallText: true,
    type: 'Talk'
  },
  {
    firstName: 'Matias',
    lastName: 'Korhonen',
    aboutSpeaker:
      "I'm a senior software engineer at Venuu working with Rails and other tech. I was also an organiser for the Euruko conference in Helsinki.",
    img: MatiasKorhonen,
    link: 'http://ruby.social/@matias',
    talk: 'Doing terrible things with ruby.wasm',
    talkDescription:
      "Sure, Ruby 3.2 brought Ruby support to the browser and that's great and all but what else can we do with it? Maybe we can compile it back to C with wasm2c or use it with Deno to create a fully static build of Ruby?",
    type: 'Talk'
  },
  {
    firstName: 'Hana',
    lastName: 'Harencarova',
    aboutSpeaker:
      'Hana is a Rubyist by heart and a software engineer at GitHub. She shares her passion by teaching at Ruby Monstas Zürich and Rails Girls.',
    img: HanaHarencarova,
    link: 'https://www.linkedin.com/in/hana-harencarova',
    talk: "Seamless Releases with Feature Flags: Insights from GitHub's Experience",
    talkDescription:
      'Feature flags are a powerful technique for controlling the releases of new features. They enable us at GitHub to release safely and to collect feedback early through staff ships and private beta ships.',
    type: 'Keynote'
  },
  {
    firstName: 'Hitoshi',
    lastName: 'Hasumi',
    aboutSpeaker:
      'Creator of PicoRuby & PRK Firmware. Maintainer of IRB. Winner of Fukuoka Ruby Award First Prize in 2020 & 2022, and a Ruby Prize 2021 final nominee.',
    img: HitoshiHasumi,
    link: 'https://github.com/hasumikin',
    talk: "A Beginner's Complete Guide to Microcontroller Programming with Ruby",
    talkDescription:
      "This talk shows you the “PicoRuby” programming ecosystem for microcontrollers including Unix-like shell, text editor, filesystem, and Ruby classes for peripherals such as GPIO, UART, I2C, SPI, and ADC. Don't worry if you are not familiar with microcontrollers, I will explain it from the first step.",
    type: 'Talk'
  },
  {
    firstName: 'Tom',
    lastName: 'De Bruijn',
    aboutSpeaker:
      "Tom is a Ruby developer at heart, who doesn't shy away from three dimensional metaprogramming, organizing Amsterdam Ruby and Rails Girls meetups.",
    img: TomDeBruijn,
    link: 'https://mastodon.social/@tombruijn',
    talk: 'Crafting elegant code with Ruby DSLs',
    talkDescription:
      'Discover the potential of Domain Specific Languages (DSLs) in Ruby. Delve into the intuitive DSLs of your favorite gems and how they work behind the scenes. Use metaprogramming to create your own expressive DSLs that make straightforward configuration and code generation available to all.',
    type: 'Talk'
  },
  {
    firstName: 'Hiroshi',
    lastName: 'Shibata',
    aboutSpeaker:
      'OSS programmer, member of Ruby core team | He is working in ANDPAD Inc. and full time OSS developer for the Ruby programming language.',
    img: HiroshiShibata,
    link: 'https://ruby.social/@hsbt',
    talk: 'How resolve Gem dependencies in your code?',
    talkDescription:
      'In Ruby 3.2, Bundler 2.4 have new dependency resolver named PubGrub. I have a plan to introduce this resolver for RubyGems. I introduce the feature of dependency resolution of gem dependencies by PubGrub and how resolve gem dependencies in your code with the standard libraries of Ruby.',
    type: 'Talk'
  },
  {
    firstName: 'Masafumi',
    lastName: 'Okura',
    aboutSpeaker:
      'Masafumi is a Rubyist, the chief organizer of Kaigi on Rails, the author of Alba gem and a freelance web developer',
    img: MasafumiOkura,
    link: 'https://okuramasafumi.com',
    talk: 'Reading RSpec — a journey of meta programming',
    talkDescription:
      "RSpec is one of the most famous Ruby libraries, but its codebase is full of meta programming and not easy to understand. In this talk I'll walk through the code of RSpec to understand how describe, let and it work. You'll be familiar with both RSpec and meta programming. Let's go on a journey!",
    type: 'Talk'
  },
  {
    firstName: 'Ivo',
    lastName: 'Anjo',
    aboutSpeaker:
      "I'm a big fan of Ruby, performance, and concurrency! I have fun learning more about these concepts and love to share what I found out.",
    img: IvoAnjo,
    link: 'https://ivoanjo.me',
    talk: 'Look out! Gotchas of Using Threads in Ruby',
    talkDescription:
      "Threads (+ fibers and ractors) are powerful tools for building apps. Yet, they often seem surrounded by an aura of mystery. Join me in demystifying them! Let's explore a number of oops that you won't get me to admit I've learned about in production, why they happen and how to fix them!",
    type: 'Talk'
  }
];
