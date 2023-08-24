export type EventType = {
  place?: string;
  time: string;
  mainHeader: string;
  subHeader?: string;
  description?: string;
};

export type DayType = {
  events: EventType[];
  backgroundColor: string;
  date: string;
};

export const agenda: {
  firstDay: DayType;
  secondDay: DayType;
  thirdDay: DayType;
} = {
  firstDay: {
    events: [
      {
        place: 'Lobby',
        time: '09:00 — 17:30',
        mainHeader: 'Registration',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '09:30 — 09:50',
        mainHeader: 'Event opening',
        subHeader: '',
        description: ''
      },
      {
        place: 'Expo zone',
        time: '10:00 — 17:30',
        mainHeader: 'Sposnors and partners expo',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '10:00 — 10:40',
        mainHeader: 'Steven R. Baker, keynote',
        subHeader: '“Reflections on a Reluctant Revolution”',
        description:
          "A teaching tool escaped the classroom. Software testing in Ruby was changed forever, and it spread to the rest of the industry.  Its creator spent almost two decades completely confused by this and will share what he's learned."
      },
      {
        place: 'Main stage',
        time: '10:50 — 11:30',
        mainHeader: 'Unconference pitches',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '11:40 — 12:20',
        mainHeader: 'Carla Urrea Stabile',
        subHeader:
          '“No passwords, no problem. More passwords, more problems: Move beyond passwords with WebAuthn and passkeys”',
        description:
          'Imagine living in a world where passwords are no more. Using passwords sucks and implementing a system that deals with passwords, is phishing-resistant and secure is scary. What if you could go completely passwordless? Well, you can today thanks to WebAuthn and passkeys.'
      },
      {
        place: 'Main stage',
        time: '12:30 — 13:10',
        mainHeader: 'Hiroshi Shibata',
        subHeader: '“How resolve Gem dependencies in your code?”',
        description:
          'In Ruby 3.2, Bundler 2.4 have new dependency resolver named PubGrub. I have a plan to introduce this resolver for RubyGems. I introduce the feature of dependency resolution of gem dependencies by PubGrub and how resolve gem dependencies in your code with the standard libraries of Ruby.'
      },
      {
        place: '',
        time: '13:10 — 14:10',
        mainHeader: 'Lunch break',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '14:10 — 14:50',
        mainHeader: 'Hitoshi Hasumi',
        subHeader:
          "“A Beginner's Complete Guide to Microcontroller Programming with Ruby”",
        description:
          'This talk shows you the “PicoRuby” programming ecosystem for microcontrollers including Unix-like shell, text editor, filesystem, and Ruby classes for peripherals such as GPIO, UART, I2C, SPI, and ADC. Dont worry if you are not familiar with microcontrollers, I will explain it from the first step.'
      },
      {
        place: 'Expo stage',
        time: '15:00 — 17:30',
        mainHeader: "Sponsors' talks",
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '15:00 — 15:30',
        mainHeader: 'Unconference talk',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '15:40 — 16:10',
        mainHeader: 'Unconference talk',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '16:20 — 16:50',
        mainHeader: 'Unconference pitches',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '17:00 — 17:30',
        mainHeader: 'Unconference pitches',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '17:30 — 18:50',
        mainHeader: 'Happy hours',
        subHeader: '',
        description: ''
      },
      {
        place: '',
        time: '18:50 — 19:20',
        mainHeader: 'Party train',
        subHeader: '',
        description: ''
      },
      {
        place: 'Dūmų fabrikas',
        time: '19:30 — 00:20',
        mainHeader: 'Ruby-doo-bee-doo party',
        subHeader: '',
        description: ''
      },
      {
        place: '',
        time: '00:30 — 01:00',
        mainHeader: 'Back train',
        subHeader: '',
        description: ''
      }
    ],
    backgroundColor: '#2BBA7E',
    date: 'Thursday, 21.09'
  },
  secondDay: {
    events: [
      {
        place: 'Lobby',
        time: '09:00 — 17:30',
        mainHeader: 'Registration',
        subHeader: '',
        description: ''
      },
      {
        place: 'Expo zone',
        time: '10:00 — 17:30',
        mainHeader: 'Sposnors and partners expo',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '10:00 — 10:40',
        mainHeader: 'ukihiro "Matz" Matsumoto, keynote',
        subHeader: '“30 Years of Ruby”',
        description: 'History of Ruby and lessons we have learned from it.'
      },
      {
        place: 'Main stage',
        time: '10:50 — 11:30',
        mainHeader: 'Unconference pitches',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '11:40 — 12:20',
        mainHeader: 'Scott Chacon',
        subHeader: '“Ask Your Code”',
        description:
          'At its core, what is version control and how does it help or hinder you in your daily life? Join Scott, cofounder of GitHub and author of the official Git book, in questioning everything you think you know about the tools that you depend on every day. Are we approaching the death of Git, or a new wave of amazing tools built on top of it to improve your workflows?'
      },
      {
        place: 'Main stage',
        time: '12:30 — 13:10',
        mainHeader: 'Ivo Anjo',
        subHeader: '“Look out! Gotchas of Using Threads in Ruby”',
        description:
          "Threads (+ fibers and ractors) are powerful tools for building apps. Yet, they often seem surrounded by an aura of mystery. Join me in demystifying them! Let's explore a number of oops that you won't get me to admit I've learned about in production, why they happen and how to fix them!"
      },
      {
        place: '',
        time: '13:10 — 14:10',
        mainHeader: 'Lunch break',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '14:10 — 14:50',
        mainHeader: 'Masafumi Okura',
        subHeader: '“Reading RSpec — a journey of meta programming”',
        description:
          "RSpec is one of the most famous Ruby libraries, but its codebase is full of meta programming and not easy to understand. In this talk I'll walk through the code of RSpec to understand how describe, let and it work. You'll be familiar with both RSpec and meta programming. Let's go on a journey!"
      },
      {
        place: 'Expo stage',
        time: '14:30 — 18:00',
        mainHeader: "Sponsors' talks",
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '15:00 — 15:30',
        mainHeader: 'Unconference talk',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '15:40 — 16:10',
        mainHeader: 'Unconference talk',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '16:20 — 16:50',
        mainHeader: 'Unconference talk',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '17:00 — 17:30',
        mainHeader: 'Unconference talk',
        subHeader: '',
        description: ''
      },
      {
        place: '',
        time: '19:00 — 00:00',
        mainHeader: 'Pub crawling excursion',
        subHeader: '',
        description: ''
      }
    ],
    backgroundColor: '#0A9CDC;',
    date: 'Friday, 22.09'
  },
  thirdDay: {
    events: [
      {
        place: 'Expo zone',
        time: '10:00 — 13:30',
        mainHeader: 'Sposnors and partners expo',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '10:00 — 10:40',
        mainHeader: 'Hana Harencarova',
        subHeader:
          "“Seamless Releases with Feature Flags: Insights from GitHub's Experience”",
        description:
          'Feature flags are a powerful technique for controlling the releases of new features. They enable us at GitHub to release safely and to collect feedback early through staff ships and private beta ships.'
      },
      {
        place: 'Main stage',
        time: '10:50 — 11:30',
        mainHeader: 'Euruko city pitching',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '11:40 — 12:20',
        mainHeader: 'Panel discussion',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '12:30 — 13:10',
        mainHeader: 'Matias Korhonen',
        subHeader: '“Doing terrible things with ruby.wasm”',
        description:
          "Sure, Ruby 3.2 brought Ruby support to the browser and that's great and all but what else can we do with it? Maybe we can compile it back to C with wasm2c or use it with Deno to create a fully static build of Ruby?"
      },
      {
        place: '',
        time: '13:10 — 14:10',
        mainHeader: 'Lunch break',
        subHeader: '',
        description: ''
      },
      {
        place: 'Main stage',
        time: '14:10 — 14:50',
        mainHeader: 'Tom de Bruijn',
        subHeader: '“Crafting elegant code with Ruby DSLs”',
        description:
          'Discover the potential of Domain Specific Languages (DSLs) in Ruby. Delve into the intuitive DSLs of your favorite gems and how they work behind the scenes. Use metaprogramming to create your own expressive DSLs that make straightforward configuration and code generation available to all.'
      },
      {
        place: 'Main stage',
        time: '15:00 — 15:30',
        mainHeader: 'Winner ceremony. Event closing',
        subHeader: '',
        description: ''
      }
    ],
    backgroundColor: '#FF74BD',
    date: 'Saturday, 23.09'
  }
};
