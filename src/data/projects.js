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
    section: 'Web Design',
    overview:
      'Whatsapp Wrapped is a playful tool that analyzes your conversations and visualizes your chatting habits. It helps users discover their most frequent contacts, most used emojis, and response times to encourage healthier messaging behaviour.',
    visualDecision:
      'The visual design embraces a sleek dark theme with pops of our brand blue #0057FF, reflecting modern messaging apps while maintaining legibility. We prioritized typography hierarchy using Bricolage Grotesque for headings and Inter for body text, and crafted custom charts for statistics.',
    logo:
      'The logo features a minimalist speech bubble intertwined with a circular graph, symbolizing both conversation and data insights. It uses the primary blue as the main accent to align with the overall color palette.',
    challenges:
      'The main challenge was parsing and visualizing conversation data in a privacy‑conscious way. We implemented client‑side processing to avoid storing personal messages and designed charts that are both informative and delightful to explore.',
    prototype:
      'You can explore the interactive prototype on Figma, which showcases the entire flow from data import to sharing your chat summary with friends.',
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
    section: 'Mobile Design',
    overview:
      'Mellow helps users maintain a healthy relationship with their devices by gently reminding them to take breaks. It runs unobtrusively in the menu bar and dims the screen when it’s time to rest your eyes.',
    visualDecision:
      'The visual approach uses soft gradients and smooth animations to create a calming feel. We introduced the brand color blue #0057FF as a motif throughout the UI to reinforce brand recognition.',
    logo:
      'The logo depicts a tranquil horizon with a rising sun, represented by a blue half circle rising above clouds — an analogy to stepping away from screens and enjoying daylight.',
    challenges:
      'Ensuring the app remains accessible without being annoying was key. We experimented with various notification patterns and window overlays, iterating based on user feedback until we achieved the right balance.',
    prototype:
      'The prototype demonstrates the onboarding flow and how the reminder overlay appears. It includes micro‑interactions like hover states and motion to guide users naturally.',
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
    section: 'Mobile Design',
    overview:
      'Mellow helps users maintain a healthy relationship with their devices by gently reminding them to take breaks. It runs unobtrusively in the menu bar and dims the screen when it’s time to rest your eyes.',
    visualDecision:
      'The visual approach uses soft gradients and smooth animations to create a calming feel. We introduced the brand color blue #0057FF as a motif throughout the UI to reinforce brand recognition.',
    logo:
      'The logo depicts a tranquil horizon with a rising sun, represented by a blue half circle rising above clouds — an analogy to stepping away from screens and enjoying daylight.',
    challenges:
      'Ensuring the app remains accessible without being annoying was key. We experimented with various notification patterns and window overlays, iterating based on user feedback until we achieved the right balance.',
    prototype:
      'The prototype demonstrates the onboarding flow and how the reminder overlay appears. It includes micro‑interactions like hover states and motion to guide users naturally.',
  },
  
];

export default projects;