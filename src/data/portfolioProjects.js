// Data for portfolio listing. Each object contains only the fields needed to
// render the project card in the portfolio grid. Detailed content for each
// project lives in `projectDetails.js`.
// Images are imported from the assets folder. If these files do not exist in
// your project yet, make sure to add them accordingly.

import cerebellumImg from '../assets/cerebellum.webp';
import mitsaqImg from '../assets/mitsaq.webp';
import mentraImg from '../assets/mentra.webp';
import veloraImg from '../assets/velora.webp';

const portfolioProjects = [
  {
    id: 'cerebellum',
    appName: 'Cerebellum',
    title: 'Cerebellum',
    primaryColor: '1C6EA4',
    tags: ['Research & Design', 'Learning Apps', 'Figma'],
    description:
      'Designed a learning platform bridging education and industry, empowering vocational students to reach their better future.',
    image: cerebellumImg,
    logo: cerebellumImg,
    section: 'Web Design',
  },
  {
    id: 'mitsaq',
    appName: 'Mitsaq',
    title: 'Mitsaq',
    primaryColor: '368743',
    tags: ['Research & Design', 'Mouslem Apps', 'Figma'],
    description:
      'Designed a learning platform bridging education and industry, empowering vocational students to reach their better future.',
    image: mitsaqImg,
    logo: mitsaqImg,
    section: 'Mobile Design',
  },
  {
    id: 'mentra',
    appName: 'Mentra',
    title: 'Mentra',
    primaryColor: '4CA8E0',
    tags: ['Research & Design', 'Mental Health Apps', 'Figma'],
    description:
      'Designed a learning platform bridging education and industry, empowering vocational students to reach their better future.',
    image: mentraImg,
    logo: mentraImg,
    section: 'Mobile Design',
  },
  {
    id: 'velora',
    appName: 'Velora',
    title: 'Velora',
    primaryColor: '91C752',
    tags: ['Research & Design', 'Foods Apps', 'Figma'],
    description:
      'Designed a learning platform bridging education and industry, empowering vocational students to reach their better future.',
    image: veloraImg,
    logo: veloraImg,
    section: 'Mobile Design',
  },
];

export default portfolioProjects;