

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
      'A digital platform serving as a career readiness accelerator for vocational high school students through structured learning paths and industry project simulations in the Industry 5.0 era.',
    image: cerebellumImg,
    logo: cerebellumImg,
    section: 'Web Design',
  },
  {
    id: 'mitsaq',
    appName: 'Mitsaq',
    title: "Mitsaq - Sharia-Based Ta'aruf Platform",
    primaryColor: '368743',
    tags: ['UI/UX Design', 'Islamic App', 'Design Thinking'],
    description:
      "A Sharia-compliant platform facilitating secure ta'aruf through structured matchmaking, pre-marital education",
    image: mitsaqImg,
    logo: mitsaqImg,
    section: 'Mobile Design',
  },
  {
    id: 'mentra',
    appName: 'Mentra',
    title: 'Mentra',
    primaryColor: '4CA8E0',
    tags: ['Mental Health', 'AI Technology', 'UI/UX Design', 'Figma'],
    description:
      'An AI-powered mobile app for adolescent mental health, featuring mood tracking, personalized self-care, and accessible support.',
    image: mentraImg,
    logo: mentraImg,
    section: 'Mobile Design',
  },
  {
    id: 'velora',
    appName: 'Velora',
    title: 'Velora',
    primaryColor: '91C752',
    tags: [
      'UI/UX Design',
      'Sustainable Food Management',
      'Food Waste',
      'Figma',
    ],
    description:
      'An AI-powered digital ecosystem  designed to reduce household food waste  through smart inventory management, recipe recommendations, and surplus food sharing.',
    image: veloraImg,
    logo: veloraImg,
    section: 'Mobile Design',
  },
];

export default portfolioProjects;
