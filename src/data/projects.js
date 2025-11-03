// src/data/projects.js
import aboutImage from '../assets/about.jpg';
import midnight from '../assets/midnight.png';

/**
 * Daftar proyek portofolio Faiz Fauzan.
 * Ganti konten objek ini dengan data riil proyek Anda.
 * Setiap proyek berisi informasi untuk kartu di halaman portofolio
 * dan konten lengkap untuk halaman detail.
 */
const projects = [
  {
    id: 'whatsapp-wrapped',
    title: 'Whatsapp Wrapped',
    description:
      'Summarizes key stats like most active member, top emojis, and response times',
    categories: ['User Engagement Tool', 'Web Application'],
    status: 'Live',
    tools: ['Figma', 'React'],
    image: aboutImage,
    overview:
      'Whatsapp Wrapped is a playful tool that analyzes your conversations and visualizes your chatting habits.',
    visualDecision:
      'The design uses a dark theme with pops of primary blue (#0057FF) and clear typography hierarchy.',
    logo:
      'The logo intertwines a speech bubble and a circular graph, colored with the primary blue.',
    challenges:
      'Parsing and visualizing conversation data while maintaining privacy was the main challenge.',
    prototype:
      'See the Figma prototype to explore the flow from data import to sharing your chat summary.',
  },
  {
    id: 'mellow-break-reminder',
    title: 'Mellow — Screen Break Reminder',
    description:
      'Simple screen break reminder that blocks your screen at set intervals',
    categories: ['macOS App'],
    status: 'Live',
    tools: ['Figma', 'Swift'],
    image: midnight,
    overview:
      'Mellow helps users maintain a healthy relationship with their devices by gently reminding them to take breaks.',
    visualDecision:
      'Soft gradients and smooth animations create a calming feel; blue (#0057FF) acts as a motif.',
    logo:
      'A tranquil horizon with a rising sun represented by a blue half-circle above clouds.',
    challenges:
      'Ensuring reminders are noticeable but not annoying required careful iteration and user feedback.',
    prototype:
      'The prototype shows the onboarding flow and how the reminder overlay appears.',
  },
];

export default projects;
