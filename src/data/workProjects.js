// Data for portfolio listing. Each object contains only the fields needed to
// render the project card in the portfolio grid. Detailed content for each
// project lives in `projectDetails.js`.
// Images are imported from the assets folder. If these files do not exist in
// your project yet, make sure to add them accordingly.

import cerebellumImg from '../assets/cerebellum.webp';
import mitsaqImg from '../assets/mitsaq.webp';
import mentraImg from '../assets/mentra.webp';
import veloraImg from '../assets/velora.webp';

const workProjects = [
  {
    id: 'cerebellum',
    appName: 'Cerebellum',
    year: '2025', // Tambahkan ini
    role: 'Product Design', // Tambahkan ini
    title: 'Cerebellum',
    primaryColor: '1C6EA4',
    tags: ['Research & Design', 'Learning Apps', 'Figma'],
    description:
      'A digital platform serving as a career readiness accelerator for vocational high school students through structured learning paths and industry project simulations in the Industry 5.0 era.',
    image: cerebellumImg,
    logo: cerebellumImg,
    section: 'Mobile Design',
  },
  {
    id: 'mitsaq',
    appName: 'Mitsaq',
    year: '2025',
    role: 'Product Design',
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
    year: '2025',
    role: 'Product Design',
    title:
      'MENTRA: AI-Based Digital Solution for Early Detection of Mental Disorders',
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
    year: '2025', // Tambahkan ini
    role: 'Product Design', // Tambahkan ini
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

export default workProjects;
