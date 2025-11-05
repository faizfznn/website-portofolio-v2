// src/data/projectDetails.js

// Impor gambar yang akan digunakan di dalam data
import cerebellumImg from '../assets/cerebellum.png';
import mitsaqImg from '../assets/mitsaq.png';
import mentraImg from '../assets/mentra.png';
import veloraImg from '../assets/velora.png';

// Placeholder untuk foto tim dan gambar bento
import teamPhoto1 from '../assets/foto1.jpg';
import teamPhoto2 from '../assets/foto2.jpg';
import teamPhoto3 from '../assets/foto3.jpg';

const projectDetails = {
  // --- Proyek CEREBELLUM ---
  cerebellum: {
    overview:
      'Cerebellum is a learning platform designed to bridge the gap between education and industry. It empowers vocational students to reach their better future through curated content and mentorship.',
    team: [
      { name: 'Faiz Fauzan', image: teamPhoto1 },
      { name: 'Rekan 1', image: teamPhoto2 },
      { name: 'Rekan 2', image: teamPhoto3 },
    ],
    role: ['Solo Designer', 'UX & UI Design', 'Documentation'],
    timeline: "Sep '23 – Jan '24 (4 months)",
    colors: [
      { hex: '#1C6EA4', name: 'Primary Blue' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Inter',
      description:
        'Inter is used for high readability, making it perfect for both small text and UI elements in a web and mobile screens.',
    },
    logoImages: [
      { src: cerebellumImg, label: 'Color' },
      { src: cerebellumImg, label: 'Monochrome (Light)' },
      { src: cerebellumImg, label: 'Monochrome (Dark)' },
    ],
    bentoImages: [cerebellumImg, mitsaqImg, veloraImg], // 3-5 gambar untuk bento grid
    figmaLink:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F... (Ganti dengan link Anda)',
  },

  // --- Proyek MITSAQ ---
  mitsaq: {
    overview:
      'Designed a learning platform bridging education and industry, empowering vocational students to reach their better future.',
    team: [{ name: 'Faiz Fauzan', image: teamPhoto1 }],
    role: ['Solo Designer', 'UI/UX Research', 'Branding'],
    timeline: "Feb '24 – Mar '24 (2 months)",
    colors: [
      { hex: '#368743', name: 'Primary Green' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Inter',
      description:
        'Inter is used for high readability, making it perfect for both small text and UI elements in a web and mobile screens.',
    },
    logoImages: [
      { src: mitsaqImg, label: 'Color' },
      { src: mitsaqImg, label: 'Monochrome (Light)' },
      { src: mitsaqImg, label: 'Monochrome (Dark)' },
    ],
    bentoImages: [mitsaqImg, cerebellumImg, mentraImg],
    figmaLink:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F... (Ganti dengan link Anda)',
  },

  // --- Proyek MENTRA ---
  mentra: {
    overview:
      'Mentra is a mental health app that provides quick access to mindfulness tools, breathing exercises, and professional support. It aims to promote emotional well‑being for young adults.',
    team: [
      { name: 'Faiz Fauzan', image: teamPhoto1 },
      { name: 'Rekan 1', image: teamPhoto2 },
    ],
    role: ['UI/UX Designer', 'Prototyping'],
    timeline: "Apr '24 – May '24 (1 month)",
    colors: [
      { hex: '#4CA8E0', name: 'Primary Blue' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Inter',
      description:
        'Inter is used for high readability, making it perfect for both small text and UI elements in a web and mobile screens.',
    },
    logoImages: [
      { src: mentraImg, label: 'Color' },
      { src: mentraImg, label: 'Monochrome (Light)' },
      { src: mentraImg, label: 'Monochrome (Dark)' },
    ],
    bentoImages: [mentraImg, veloraImg, mitsaqImg],
    figmaLink:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F... (Ganti dengan link Anda)',
  },

  // --- Proyek VELORA ---
  velora: {
    overview:
      'Velora is a food delivery app that connects local producers with consumers seeking fresh, sustainable ingredients. It focuses on farm‑to‑table experiences and transparent sourcing.',
    team: [
      { name: 'Faiz Fauzan', image: teamPhoto1 },
      { name: 'Rekan 1', image: teamPhoto2 },
      { name: 'Rekan 2', image: teamPhoto3 },
    ],
    role: ['Lead Designer', 'UI/UX Design', 'Branding'],
    timeline: "Jun '24 – Aug '24 (3 months)",
    colors: [
      { hex: '#91C752', name: 'Primary Green' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Inter',
      description:
        'Inter is used for high readability, making it perfect for both small text and UI elements in a web and mobile screens.',
    },
    logoImages: [
      { src: veloraImg, label: 'Color' },
      { src: veloraImg, label: 'Monochrome (Light)' },
      { src: veloraImg, label: 'Monochrome (Dark)' },
    ],
    bentoImages: [veloraImg, mitsaqImg, cerebellumImg],
    figmaLink:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F... (Ganti dengan link Anda)',
  },
};

export default projectDetails;