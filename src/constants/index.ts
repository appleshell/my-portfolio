import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  nestjs,
  nextjs,
  vuejs,
  connectBg,
  siteBg,
  mycBg,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-End Developer',
    icon: web,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Nest JS',
    icon: nestjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'PINGDUODUO - Shanghai',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'Nov 2021 - June 2023',
    points: [
      'Developed the advertising management system for marketing, resolving issues in utilization and daily updates.',
      'Collaborated with product team members to implement websites for third-party companies accessing advertising functionality.',
      'Built and managed reusable components to improve development efficiently.',
      'Optimized Webpack configurations of projects to improve developing and deploying efficiency.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'AUTUZUCHE - Shanghai',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'May 2019 - Sep 2021',
    points: [
      'Developed of administrative systems by ReactJS, Typescript and Ant-Design.',
      'Daily maintenance of the intracompany frontend component library for improving development efficiency.',
      "Implemented mobile pages in WeChat to facilitate customer access to company's services.",
      'Assessed UX and UI designs for technical feasibility.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'ZHANGMEN - Shanghai',
    icon: vuejs,
    iconBg: '#383E56',
    date: 'July 2018 – April 2019',
    points: [
      'Daily maintenance and debugging issues for the intracompany sales management system.',
      'Created dashboards for after-sales service to enhance the work efficiency of Customer Service Dept.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'WEIXIANG - Shanghai',
    icon: vuejs,
    iconBg: '#E6DEDD',
    date: 'Oct 2016 – June 2018',
    points: [
      'Developed the intracompany administrative dashboard and mobile pages using Vue 2 and daily maintenance.',
      'Developed engaging mobile market pages by HTML, CSS, and JavaScript.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Connect',
    description:
      'Web-based platform that allows users to apply, creat and test ad positions. It also shows the ad data to help users select stategies.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient',
      },
    ],
    image: connectBg,
    url: 'https://connect.linmo.info/',
    source_code_link: 'https://github.com/appleshell/ad-connect',
  },
  {
    name: 'myc',
    description:
      'My custom tools for my development and learning. it includes UI components, custome hooks and utility functions',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'dumi',
        color: 'green-text-gradient',
      },
      {
        name: 'markdown',
        color: 'pink-text-gradient',
      },
    ],
    image: mycBg,
    url: 'https://my-component.vercel.app/',
    source_code_link: 'https://github.com/appleshell/myc',
  },
  {
    name: 'Appleshell',
    description:
      'My personal site, including my learning records and some thoughts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'docusaurus',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: siteBg,
    url: 'https://linmo.info',
    source_code_link: 'https://github.com/appleshell/my-frontend',
  },
];

export { services, technologies, experiences, testimonials, projects };
