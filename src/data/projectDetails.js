// Detailed information for each project. Keys match project IDs. These
// objects contain all the data required by the ProjectDetailPage. For
// demonstration purposes placeholder text is provided – feel free to
// customise these fields for your actual projects.

import cerebellumImg from '../assets/cerebellum.png';
import mitsaqImg from '../assets/mitsaq.png';
import mentraImg from '../assets/mentra.png';
import veloraImg from '../assets/velora.png';

const projectDetails = {
  cerebellum: {
    id: 'cerebellum',
    title: 'Cerebellum',
    image: cerebellumImg,
    overview:
      'Cerebellum is a learning platform designed to bridge the gap between education and industry. It empowers vocational students to reach their better future through curated content and mentorship.',
    visualDecision:
      'The UI uses a modern blue palette derived from the primary colour (1C6EA4) with soft gradients. We emphasised readability using Bricolage Grotesque for headings and kept layouts clean and human‑centred.',
    logo:
      'The logo depicts a stylised brain to represent knowledge and growth, set against a circular background coloured with the primary palette. This ties back to the app name while aligning with the design system.',
    challenges:
      'The main challenge was designing for both students and industry professionals. We iterated on workflows and onboarding to make the platform accessible yet robust, and performed user testing to refine the experience.',
    prototype:
      'The interactive prototype shows the course selection flow, progress tracking, and industry integration. It includes micro‑interactions and animations to guide users through the journey.',
  },
  mitsaq: {
    id: 'mitsaq',
    title: 'Mitsaq',
    image: mitsaqImg,
    overview:
      'Mitsaq is a religious learning app aimed at building daily habits and providing educational resources for users. It offers curated content and community engagement for continuous improvement.',
    visualDecision:
      'We combined a natural green palette (368743) with subtle textures to evoke calmness. The typography remains consistent with the rest of the portfolio using Bricolage Grotesque for headings.',
    logo:
      'The logo integrates symbolic geometric shapes representing guidance and growth, coloured in the primary green. It reflects the spiritual nature of the app.',
    challenges:
      'Designing an experience that blends religious learning with modern UI patterns required careful consideration. Accessibility and simplicity were prioritised while ensuring a rich feature set.',
    prototype:
      'The prototype demonstrates habit tracking, lesson browsing, and community forums. It also highlights micro‑animations used to celebrate achievements.',
  },
  mentra: {
    id: 'mentra',
    title: 'Mentra',
    image: mentraImg,
    overview:
      'Mentra is a mental health app that provides quick access to mindfulness tools, breathing exercises, and professional support. It aims to promote emotional well‑being for young adults.',
    visualDecision:
      'A soothing blue colour (4CA8E0) combined with gradients helps create a sense of calm. The layout is spacious, guiding the user through introspective exercises and resources.',
    logo:
      'The logo features a simple, fluid shape representing balance and harmony, coloured with the primary palette. It conveys the app’s mission of mental clarity and tranquillity.',
    challenges:
      'One of the key challenges was creating a safe and inviting environment while dealing with sensitive topics. We worked with mental health professionals to ensure our design decisions were appropriate.',
    prototype:
      'The prototype highlights features such as mood journals, breathing guides, and live chat sessions with professionals. Animations are deliberately subtle to maintain a calming user experience.',
  },
  velora: {
    id: 'velora',
    title: 'Velora',
    image: veloraImg,
    overview:
      'Velora is a food delivery app that connects local producers with consumers seeking fresh, sustainable ingredients. It focuses on farm‑to‑table experiences and transparent sourcing.',
    visualDecision:
      'A fresh green palette (91C752) is used alongside organic shapes and textures to evoke nature. The design pairs the primary colour with white space to allow content to breathe.',
    logo:
      'The logo symbolises a leaf and plate, coloured with the primary green. It emphasises healthy eating and sustainability.',
    challenges:
      'The main challenge was balancing variety and simplicity. The UI needed to showcase diverse food products while keeping navigation intuitive for hungry users.',
    prototype:
      'The prototype demonstrates the ordering process, including filtering by ingredients and viewing producer profiles. Micro‑animations help guide users through the steps of placing an order.',
  },
};

export default projectDetails;