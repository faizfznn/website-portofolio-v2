// // Cerebelum desain result
import cerebellumImg1 from '../assets/cerebellum1.png';
import cerebellumImg2 from '../assets/cerebellum2.png';
import cerebellumImg3 from '../assets/cerebellum3.png';

// // mitsaq desain result
import mitsaqImg1 from '../assets/mitsaq1.png';
import mitsaqImg2 from '../assets/mitsaq2.png';
import mitsaqImg3 from '../assets/mitsaq3.png';

// // velora desain result
import veloraImg1 from '../assets/velora1.png';
import veloraImg2 from '../assets/velora2.png';
import veloraImg3 from '../assets/velora3.png';

// // mentra desain result
import mentraImg1 from '../assets/mentra1.png';
import mentraImg2 from '../assets/mentra2.png';
import mentraImg3 from '../assets/mentra3.png';

// Design System Images
import dsVelora from '../assets/dsVelora.png';
import dsMitsaq from '../assets/dsMitsaq.png';
import dsMentra from '../assets/dsMentra.png';
import dsCerebelum from '../assets/dsCerebelum.png';

// Logo Apps
import logoMentra from '../assets/logoMentra.png';
import logoVelora from '../assets/logoVelora.png';
import logoMitsaq from '../assets/logoMitsaq.png';
import logoCerebelum from '../assets/logoCerebelum.png';

// Rekan (Tim Saya)
import akhdan from '../assets/akhdan.jpg';
import rara from '../assets/rara.jpg';
import ariq from '../assets/ariq.jpeg';

const projectDetails = {
  // --- Proyek CEREBELLUM ---
  cerebellum: {
    overview:
      'Cerebellum is a career-readiness platform designed to bridge the gap between vocational high school (SMK) education and industrial demands, helping students build technical skills and reduce career anxiety through industry-standard simulations.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Fira Zaha Iklila',
        image: rara,
        linkedin: 'https://www.linkedin.com/in/firaiklila/',
      },
    ],
    role: ['UX & UI Design', 'UX Research'],
    timeline: "Sep '25 – Oct '25 (1 months)",
    // Bagian Problems & Solutions
    problems: [
      {
        title: 'Educational Mismatch', //
        description:
          'Vocational curricula struggle to keep pace with rapid technological shifts, causing a significant gap between school lessons and industry requirements.', // [cite: 15, 17]
      },
      {
        title: 'Career Anxiety', // [cite: 21]
        description:
          'High levels of uncertainty regarding future career paths lead to anxiety among over 60% of students after graduation.', // [cite: 22, 33]
      },
      {
        title: 'Lack of Industry Experience', //
        description:
          'Students often lack experience in end-to-end projects and collaboration tools like Git, making their portfolios less convincing to recruiters.', // [cite: 60, 131, 132]
      },
    ],
    solutions: [
      {
        title: 'Structured Career Roadmaps', //
        description:
          "Providing 'Jejak Karir' as a personal navigator that offers clear learning paths for both vocational and academic goals.", // [cite: 205]
      },
      {
        title: 'Collaborative Project Hub', //
        description:
          'A space for students to work on industry-standard projects, enabling them to build professional portfolios and practice remote collaboration.', // [cite: 208, 210]
      },
      {
        title: 'AI Interview Simulation', //
        description:
          'Helping students prepare for the workforce by practicing technical and HR interviews tailored to their specific projects and skills.', // [cite: 219]
      },
    ],
    colors: [
      { hex: '#1C6EA4', name: 'Primary' },
      { hex: '#E66923', name: 'Secondary' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Inter',
      description:
        'Inter is used for high readability, making it perfect for both small text and UI elements.',
    },
    designSystemImages: [dsCerebelum], // Tambahkan gambar-gambar design system di sini
    logoImages: [
      { src: logoCerebelum, label: 'Color' },
      { src: logoCerebelum, label: 'Color' },
    ],
    bentoImages: [cerebellumImg1, cerebellumImg2, cerebellumImg3],
    figmaLink:
      'https://embed.figma.com/proto/UdoWaLKHbYA8JYphlERo4g/CITEUP?page-id=728%3A3022&node-id=728-9480&viewport=932%2C309%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=728%3A9480&embed-host=share&hide-ui=1', // Ganti dengan link Anda
  },

  // --- Proyek MITSAQ ---
  mitsaq: {
    overview:
      'Mitsaq is a Sharia-based digital platform designed to facilitate a healthy, safe, and modern ta’aruf process for those seeking marriage.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Fira Zaha Iklila',
        image: rara,
        linkedin: 'https://www.linkedin.com/in/firaiklila/',
      },
    ],
    role: ['Solo Designer', 'UI/UX Research', 'Branding'],
    timeline: "Feb '24 – Mar '24 (2 months)",
    problems: [
      {
        title: 'Lack of Sharia-Compliant Platforms',
        description:
          'Many existing dating applications do not align with Islamic values, leading to concerns about the risks of dating and maintaining personal purity (iffah).',
      },
      {
        title: 'Marriage Readiness Confusion',
        description:
          'Young adults often feel confused and unsure about their mental, spiritual, and financial readiness to enter marriage.',
      },
      {
        title: 'Educational Gaps & Process Uncertainty',
        description:
          'There is a significant lack of early education regarding marriage laws (fiqh) and a structured understanding of the proper ta’aruf flow.',
      },
    ],
    solutions: [
      {
        title: 'Structured Mediated Matchmaking',
        description:
          'Providing a formal and supervised flow including Ta’aruf, Nazhor, Khitbah, and Akad, overseen by trusted mediators to maintain Islamic etiquette.',
      },
      {
        title: 'Readiness Scoring System',
        description:
          'A questionnaire-based feature that objectively measures marriage readiness across religious, emotional, and financial aspects.',
      },
      {
        title: 'Integrated Pre-Marital Education',
        description:
          'Interactive modules featuring articles and videos that cover marriage vision, fiqh, and physical-spiritual health.',
      },
    ],
    colors: [
      { hex: '#368743', name: 'Primary' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Poppins',
      description:
        'The design uses a clean and modern typography to ensure an intuitive and trustworthy user experience for serious life decisions.',
    },
    designSystemImages: [dsMitsaq],
    logoImages: [{ src: logoMitsaq, label: 'Color' }],
    bentoImages: [mitsaqImg1, mitsaqImg2, mitsaqImg3],
    figmaLink:
      'https://embed.figma.com/proto/VQrE9qzQWOKSXMUT4GSRfi/MTQ_Mitsaq?page-id=646%3A21721&node-id=671-105613&p=f&viewport=3006%2C-7690%2C0.52&scaling=cover&content-scaling=fixed&starting-point-node-id=671%3A107892&embed-host=share&hide-ui=1',
  },

  // --- Proyek MENTRA ---
  mentra: {
    overview:
      'Mentra is a mental health app that provides quick access to mindfulness tools, breathing exercises, and professional support.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
    ],
    role: ['UI/UX Designer', 'Prototyping'],
    timeline: "Apr '24 – May '24 (1 month)",
    problems: [
      {
        title: 'Difficulty in Self-Identification',
        description:
          'Adolescents often struggle to recognize early signs of mental health decline or track emotional patterns effectively',
      },
      {
        title: 'Stigma and High Costs',
        description:
          'Social stigma and expensive professional fees often prevent young people from seeking necessary psychological help',
      },
      {
        title: 'Inconsistent Self-Care',
        description:
          'Users find it challenging to maintain consistent mindfulness or journaling habits without personalized guidance',
      },
    ],
    solutions: [
      {
        title: 'AI-Powered Condition Reports',
        description:
          'MentrAI analyzes mood, sleep, and journaling data to provide comprehensive health scores and personalized insights',
      },
      {
        title: 'Accessible Professional Support',
        description:
          'The platform provides integrated 1-on-1 consultations with experts at affordable rates through various discount options',
      },
      {
        title: 'Integrated Wellness Tracking',
        description:
          'A centralized system for daily mood logs, sleep quality tracking, and AI-assisted journaling to build healthy routines',
      },
    ],
    colors: [
      { hex: '#4CA8E0', name: 'Primary' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Sf Pro Text',
      description:
        'SF Pro ensures modern legibility, ideal for crisp UI elements and clear, small text.',
    },
    designSystemImages: [dsMentra],
    logoImages: [{ src: logoMentra, label: 'Color' }],
    bentoImages: [mentraImg1, mentraImg2, mentraImg3],
    figmaLink:
      'https://embed.figma.com/proto/n750lg99vaSoKTwxRtRaTJ/HITC_MENTRA?page-id=1%3A8&node-id=963-15115&p=f&viewport=-2783%2C-788%2C0.23&scaling=cover&content-scaling=fixed&starting-point-node-id=156%3A1245&embed-host=share&hide-ui=1',
  },

  // --- Proyek VELORA ---
  velora: {
    overview:
      'Velora is a digital ecosystem designed to tackle the food waste crisis in Indonesia, where households contribute to 61% of the 23-48 million tons of annual food waste. The platform optimizes surplus food by integrating user-centered UI/UX principles, AI Image Recognition, and gamification to transform consumption behavior. It serves as a comprehensive tool for food management, social contribution through food sharing, and an educational hub for sustainable living.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Naufal Akhdan',
        image: akhdan,
        linkedin: 'https://www.linkedin.com/in/naufal-akhdan-899918289/',
      },
    ],
    role: ['UI/UX Design', 'UX Research', 'Prototyping'],
    timeline: "Jun '25 – Jul '25 (1 month)",
    problems: [
    {
      title: 'High Household Food Waste',
      description:
        'Indonesia produces 23-48 million tons of food waste annually, with 61% of it originating from household consumption',
    },
    {
      title: 'Poor Food Management',
      description:
        'Issues arise from ineffective shopping planning, lack of food storage education, and a lack of awareness regarding food expiration',
    },
    {
      title: 'Economic and Environmental Impact',
      description:
        'Excessive food waste leads to significant economic losses, food security crises, and negative impacts on the environment',
    },
  ],
  solutions: [
    {
      title: 'AI Inventory Management',
      description:
        'Implementing AI Image Recognition to help users manage and track their food inventory more efficiently',
    },
    {
      title: 'Smart Recipe Recommendations',
      description:
        'Providing intelligent recipe suggestions based on ingredients that are nearing their expiration date to ensure they are utilized',
    },
    {
      title: 'Community Food Sharing',
      description:
        'Creating a digital space for individuals to distribute surplus food to those in need, fostering a responsible consumption culture',
    },
  ],
    colors: [
      { hex: '#91C752', name: 'Primary' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#000000', name: 'Black' },
    ],
    typography: {
      fontFamily: 'Inter',
      description:
        'Inter is used for high readability, making it perfect for both small text and UI elements.',
    },
    designSystemImages: [dsVelora], // Bisa 4 gambar
    logoImages: [{ src: logoVelora, label: 'Color' }],
    bentoImages: [veloraImg1, veloraImg2, veloraImg3],
    // PERBAIKAN: Menghapus '&show-proto-sidebar=1'
    figmaLink:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiAoMTa6aw42i1HAJ5U0iQL%2FINSPACE_VELORA%3Fpage-id%3D1396%253A15723%26node-id%3D1503-45930%26viewport%3D-327%252C339%252C0.28%26scaling%3Dcover%26content-scaling%3Dfixed%26starting-point-node-id%3D1503%253A45880%26hide-ui%3D1',
  },
};

export default projectDetails;
