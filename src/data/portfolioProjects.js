import cerebellumImg from '../assets/cerebellum.webp';
import mitsaqImg from '../assets/mitsaq.webp';
import mentraImg from '../assets/mentra.webp';
import veloraImg from '../assets/velora.webp';
import filkomReservImg from '../assets/filkomreserv.png';
import portoV1Img from '../assets/portoV1.png';
import shuffleCardImg from '../assets/shufflecard.png';
import quizAppImg from '../assets/quizapp.png';

const portfolioProjects = [
  {
    id: 'cerebellum',
    appName: 'Cerebellum',
    year: '2025',
    title: 'Cerebellum',
    primaryColor: '1C6EA4',
    tags: ['UI/UX Design', 'Research & Design', 'Learning Apps', 'Figma'],
    description:
      'A digital platform serving as a career readiness accelerator for vocational high school students through structured learning paths and industry project simulations in the Industry 5.0 era.',
    image: cerebellumImg,
    logo: cerebellumImg,
    section: 'UI/UX',
  },
  {
    id: 'mitsaq',
    appName: 'Mitsaq',
    year: '2025',

    title: "Mitsaq - Sharia-Based Ta'aruf Platform",
    primaryColor: '368743',
    tags: ['UI/UX Design', 'Islamic App', 'Design Thinking'],
    description:
      "A Sharia-compliant platform facilitating secure ta'aruf through structured matchmaking, pre-marital education",
    image: mitsaqImg,
    logo: mitsaqImg,
    section: 'UI/UX',
  },
  {
    id: 'mentra',
    appName: 'Mentra',
    year: '2025',

    title: 'Mentra',
    primaryColor: '4CA8E0',
    tags: ['UI/UX Design', 'Mental Health', 'AI Technology', 'Figma'],
    description:
      'An AI-powered mobile app for adolescent mental health, featuring mood tracking, personalized self-care, and accessible support.',
    image: mentraImg,
    logo: mentraImg,
    section: 'UI/UX',
  },
  {
    id: 'velora',
    appName: 'Velora',
    year: '2025',

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
    section: 'UI/UX',
  },
  // {
  //   id: 'porto-website-v2',
  //   appName: 'Personal Wesbite V2',
  //   year: '2025',

  //   title: 'Velora',
  //   primaryColor: '91C752',
  //   tags: [
  //     'Frontend Development',
  //     'Sustainable Food Management',
  //     'Food Waste',
  //     'Figma',
  //   ],
  //   description:
  //     'An AI-powered digital ecosystem  designed to reduce household food waste  through smart inventory management, recipe recommendations, and surplus food sharing.',
  //   image: veloraImg,
  //   logo: veloraImg,
  //   section: 'Website',
  // },
  {
    id: 'porto-website-v1',
    appName: 'Personal Website V1',
    year: '2025',
    tags: ['Frontend Development', 'UI/UX Design', 'Personal Branding'],
    description:
      'A personal portfolio website designed to showcase my journey as a Computer Science student at UB, featuring a dark-themed UI, organization experience, and project gallery.',
    image: portoV1Img,
    section: 'Website',
  },
  {
    id: 'quiz-app',
    appName: 'Quiz App',
    year: '2026',
    tags: ['Frontend Development', 'UI/UX Design', 'Local Storage'],
    description:
      'A dynamic React-based quiz platform featuring client-side authentication, real-time trivia from OpenTDB, countdown timers, and an auto-save mechanism to prevent data loss.',
    image: quizAppImg,
    section: 'Website',
  },
  {
    id: 'shuffle-card',
    appName: 'Shuffle Card',
    year: '2025',
    tags: [
      'Web Utility',
      'Google Sheets Integration',
      'Excel Support',
      'Interactive Tool',
    ],
    description:
      'A versatile web tool designed for gamification and random selection. It supports loading custom decks dynamically via Google Sheets API, Excel (.xlsx) uploads, or manual entry.',
    image: shuffleCardImg,
    section: 'Website',
  },
  {
    id: 'filkomreserv',
    appName: 'FILKOMreserV',
    year: '2024',
    tags: ['Web Development', 'Campus Administration', 'System Analysis'],
    description:
      'A centralized web platform designed to streamline room reservations at FILKOM UB. It replaces manual spreadsheet processes with real-time scheduling, digital approval workflows, and transparent availability tracking.',
    image: filkomReservImg,
    section: 'Website',
  },
];

export default portfolioProjects;
