// // Cerebelum desain result
import cerebellumImg1 from '../assets/cerebellum1.webp';
import cerebellumImg2 from '../assets/cerebellum2.png';
import cerebellumImg3 from '../assets/cerebellum3.png';

// // mitsaq desain result
import mitsaqImg1 from '../assets/mitsaq1.webp';
import mitsaqImg2 from '../assets/mitsaq2.png';
import mitsaqImg3 from '../assets/mitsaq3.webp';

// // velora desain result
import veloraImg1 from '../assets/velora1.png';
import veloraImg2 from '../assets/velora2.png';
import veloraImg3 from '../assets/velora3.png';

// // mentra desain result
import mentraImg1 from '../assets/mentra1.png';
import mentraImg2 from '../assets/mentra2.png';
import mentraImg3 from '../assets/mentra3.png';

// Design System Images
import dsVelora from '../assets/dsVelora.webp';
import dsMitsaq from '../assets/dsMitsaq.png';
import dsMentra from '../assets/dsMentra.png';
import dsCerebelum from '../assets/dsCerebelum.webp';

// Logo Apps
import logoMentra from '../assets/logoMentra.png';
import logoVelora from '../assets/logoVelora.png';
import logoMitsaq from '../assets/logoMitsaq.png';
import logoCerebelum from '../assets/logoCerebelum.webp';

// Tim Saya
import akhdan from '../assets/akhdan.jpg';
import rara from '../assets/rara.jpg';
import ariq from '../assets/ariq.jpeg';
import dani from '../assets/dani.webp';
import arif from '../assets/arif.webp';
import fotoFaiz from '../assets/formal.webp';

const projectDetails = {
  // --- Proyek CEREBELLUM ---
  cerebellum: {
    overview:
      'Cerebellum is a career-readiness platform designed to bridge the gap between vocational high school (SMK) education and industrial demands, helping students build technical skills and reduce career anxiety through industry-standard simulations.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        role: 'UX Researcher', // TAMBAHKAN INI
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Fira Zaha Iklila',
        role: 'UI Designer', // TAMBAHKAN INI
        image: rara,
        linkedin: 'https://www.linkedin.com/in/firaiklila/',
      },
    ],
    role: ['UX & UI Design', 'UX Research'],
    timeline: "Sep '25 – Oct '25 (1 months)",
    tools: 'Figma, ClickUp, Maze, Google Forms, Inkscape',
    problems: [
      {
        title: 'Educational Mismatch',
        description:
          'Vocational curricula struggle to keep pace with rapid technological shifts, causing a significant gap between school lessons and industry requirements.',
      },
      {
        title: 'Career Anxiety',
        description:
          'High levels of uncertainty regarding future career paths lead to anxiety among over 60% of students after graduation.',
      },
      {
        title: 'Lack of Industry Experience',
        description:
          'Students often lack experience in end-to-end projects and collaboration tools like Git, making their portfolios less convincing to recruiters.',
      },
    ],
    solutions: [
      {
        title: 'Structured Career Roadmaps',
        description:
          "Providing 'Jejak Karir' as a personal navigator that offers clear learning paths for both vocational and academic goals.",
      },
      {
        title: 'Collaborative Project Hub',
        description:
          'A space for students to work on industry-standard projects, enabling them to build professional portfolios and practice remote collaboration.',
      },
      {
        title: 'AI Interview Simulation',
        description:
          'Helping students prepare for the workforce by practicing technical and HR interviews tailored to their specific projects and skills.',
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
    designSystemImages: [dsCerebelum],
    logoImages: [
      { src: logoCerebelum, label: 'Color' },
      { src: logoCerebelum, label: 'Color' },
    ],
    bentoImages: [cerebellumImg1, cerebellumImg2, cerebellumImg3],
    figmaLink:
      'https://embed.figma.com/proto/UdoWaLKHbYA8JYphlERo4g/CITEUP?page-id=728%3A3022&node-id=728-9480&viewport=932%2C309%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=728%3A9480&embed-host=share&hide-ui=1',
  },

  // --- Proyek MITSAQ ---
  mitsaq: {
    overview:
      'Mitsaq is a Sharia-based digital platform designed to facilitate a healthy, safe, and modern ta’aruf process for those seeking marriage.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        role: 'UX Researcher', // TAMBAHKAN INI
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Fira Zaha Iklila',
        role: 'UI Designer', // TAMBAHKAN INI
        image: rara,
        linkedin: 'https://www.linkedin.com/in/firaiklila/',
      },
    ],
    role: ['Solo Designer', 'UI/UX Research', 'Branding'],
    timeline: "Feb '24 – Mar '24 (2 months)",
    tools: 'Figma, ClickUp, Maze, Google Forms, Inkscape',
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
      'https://embed.figma.com/proto/VQrE9qzQWOKSXMUT4GSRfi/MTQ_Mitsaq?page-id=38%3A36&node-id=41-56544&viewport=14%2C-278%2C0.52&scaling=scale-down&content-scaling=fixed&starting-point-node-id=41%3A56544&show-proto-sidebar=1&embed-host=share&hide-ui=1',
  },

  // --- Proyek MENTRA ---
  mentra: {
    overview:
      'Mentra is a mental health app that provides quick access to mindfulness tools, breathing exercises, and professional support.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        role: 'UX Researcher', // TAMBAHKAN INI
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
    ],
    role: ['UI/UX Designer', 'Prototyping'],
    timeline: "Apr '24 – May '24 (1 month)",
    tools: 'Figma, ClickUp, Maze, Google Forms, Inkscape',
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
      'https://embed.figma.com/proto/n750lg99vaSoKTwxRtRaTJ/HITC_MENTRA?page-id=1%3A8&node-id=156-1245&viewport=-1595%2C983%2C0.56&scaling=scale-down&content-scaling=fixed&starting-point-node-id=156%3A1245&show-proto-sidebar=1&embed-host=share&hide-ui=1',
  },

  // --- Proyek VELORA ---
  velora: {
    overview:
      'Velora is a digital ecosystem designed to tackle the food waste crisis in Indonesia, where households contribute to 61% of the 23-48 million tons of annual food waste. The platform optimizes surplus food by integrating user-centered UI/UX principles, AI Image Recognition, and gamification to transform consumption behavior. It serves as a comprehensive tool for food management, social contribution through food sharing, and an educational hub for sustainable living.',
    team: [
      {
        name: 'Ariiq Tsany Zu',
        role: 'UX Researcher', // TAMBAHKAN INI
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Naufal Akhdan',
        role: 'UI Designer', // TAMBAHKAN INI

        image: akhdan,
        linkedin: 'https://www.linkedin.com/in/naufal-akhdan-899918289/',
      },
    ],
    role: ['UI/UX Design', 'UX Research', 'Prototyping'],
    timeline: "Jun '25 – Jul '25 (1 month)",
    tools: 'Figma, ClickUp, Maze, Google Forms, Inkscape',
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
    designSystemImages: [dsVelora],
    logoImages: [{ src: logoVelora, label: 'Color' }],
    bentoImages: [veloraImg1, veloraImg2, veloraImg3],
    figmaLink:
      'https://embed.figma.com/proto/iAoMTa6aw42i1HAJ5U0iQL/INSPACE_VELORA?page-id=1396%3A15723&node-id=1503-45880&viewport=-3592%2C-1523%2C0.68&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1503%3A45880&embed-host=share&hide-ui=1',
    },
    
  // --- Proyek FilkomReserV ---
  filkomreserv: {
    overview:
      'FILKOMreserV is a technology-based system designed to automate the room reservation process at the Faculty of Computer Science, Brawijaya University. This platform aims to streamline error-prone manual methods into an integrated system that offers time efficiency, data transparency, and ease of access for students and administrative staff.',
    websiteLink: 'https://feaps.vercel.app/',
    githubLink: 'https://github.com/Treamyracle/FilkomReserV_Frontend',

    team: [
      {
        name: 'Arif Athaya Harahap',
        role: 'Backend Developer',
        image: arif,
        linkedin: 'https://www.linkedin.com/in/arifathaya/',
      },
      {
        name: 'Ariiq Tsany Zu',
        role: 'System Analyst',
        image: ariq,
        linkedin: 'https://www.linkedin.com/in/tsanyzzu/',
      },
      {
        name: 'Nugrah Ramadhani',
        role: 'UX Researcher',
        image: dani,
        linkedin: 'https://www.linkedin.com/in/nramadhan1/',
      },
    ],
    role: ['System Analyst', 'UI/UX Design', 'Software Engineer'],
    timeline: "Aug '24 - Dec '24",
    tools: 'Figma, HTML, CSS, JavaScript, Golang',
    problems: [
      {
        title: 'Fragmented Manual Process',
        description:
          'The current reservation process is fragmented, requiring users to check schedules on spreadsheets, fill out Google Forms, and perform manual confirmation via Line chat.',
      },
      {
        title: 'Data Inaccuracy & Loss',
        description:
          'Manual methods often lead to inaccurate room availability information and increase the risk of reservation data loss due to decentralized recording.',
      },
      {
        title: 'Communication Bottlenecks',
        description:
          'Users frequently experience confirmation delays and miscommunication with the administration, as well as difficulty tracking the status of their applications.',
      },
    ],
    solutions: [
      {
        title: 'Real-Time Availability Check',
        description:
          'A real-time room scheduling feature that allows users to accurately view room availability status for specific dates and times.',
      },
      {
        title: 'Integrated Reservation Flow',
        description:
          'A one-stop platform facilitating the entire reservation flow, from room selection and data entry to uploading required documents (Student ID & Reservation Letter).',
      },
      {
        title: 'Automated Notifications',
        description:
        'An automated notification and email system that provides immediate status updates (approved/rejected) to users, reducing waiting times.',
      },
    ],
  },
  // --- Proyek Portfolio Website V1 ---
  'porto-website-v1': {
    overview:
    'This personal website serves as a digital identity for my undergraduate journey in Computer Science at UB. It is designed to showcase my interests in Software Engineering and UI/UX, focusing on creating seamless digital experiences while documenting my organizational roles and technical projects.',
    websiteLink: 'https://faizfauzan.vercel.app/',
    githubLink: 'https://github.com/faizfznn/website-portofolio',

    team: [
      {
        name: 'Muhammad Faiz Fauzan',
        role: 'Frontend Developer & Designer',
        image: fotoFaiz,
        linkedin: 'https://www.linkedin.com/in/faizfauzan/',
      },
    ],
    role: ['Frontend Developer', 'UI/UX Designer'],
    timeline: "Jan '25 - Present",
    tools: 'Figma, React.js, Tailwind',
  },
  // --- Proyek Shuffle Card ---
  'shuffle-card': {
    overview:
      'Web Kartu Acak (Shuffle Card) is a dynamic web utility built to facilitate random selection processes for events, classrooms, or games. Unlike standard randomizers, this tool offers deep integration with external data sources like Google Sheets and Excel, allowing users to "bring their own deck" instantly without tedious manual entry.',
    websiteLink: 'https://flip-card-nine-kappa.vercel.app/',
    githubLink: 'https://github.com/faizfznn/flipcard-universal',

    team: [
      {
        name: 'Muhammad Faiz Fauzan',
        role: 'Frontend Developer & Designer',

        image: fotoFaiz,
        linkedin: 'https://www.linkedin.com/in/faizfauzan/',
      },
    ],
    role: ['Frontend Developer', 'Logic Implementation'],
    timeline: "Oct '24 - Nov '24",
    tools: 'Figma, React.js, Tailwind',
  },
  'quiz-app': {
    overview:
      'My Quiz Appis a comprehensive React-based Online Quiz platform designed to simulate a real computer-based test environment. It features a complete user flow from secure authentication and material selection to a timed examination system with dynamic questions and automated scoring.',
    websiteLink: 'https://quiz-app-84cu.vercel.app/',
    githubLink: 'https://github.com/faizfznn/quiz-app',
    team: [
      {
        name: 'Muhammad Faiz Fauzan',
        role: 'Frontend Developer & Designer',

        image: fotoFaiz, // Gunakan variabel foto profil Anda
        linkedin: 'https://www.linkedin.com/in/faizfauzan/',
      },
    ],
    role: ['Frontend Developer', 'React Specialist'],
    timeline: "Jan '26 - Present",
    tools: 'Figma, React.js, Tailwind',
    problems: [
      {
        title: 'Data Persistence Issues',
        description:
          'In standard web quizzes, accidental page refreshes or browser closures often result in total progress loss, forcing users to restart from scratch.',
      },
      {
        title: 'Static Content Repetition',
        description:
          "Hardcoded questions make quizzes predictable and boring after the first attempt, reducing the application's replay value.",
      },
      {
        title: 'Client-Side Security',
        description:
        'The need to restrict access to registered users and manage sessions without relying on a complex backend infrastructure.',
      },
    ],
    solutions: [
      {
        title: 'Auto-Save & Resume Engine',
        description:
          'Implemented a robust state management system using LocalStorage that saves answers and timer status in real-time, allowing users to resume exactly where they left off.',
      },
      {
        title: 'Dynamic OpenTDB Integration',
        description:
        'Integrated the Open Trivia Database (OpenTDB) API to fetch questions dynamically, ensuring a fresh and unique set of challenges for every session.',
      },
      {
        title: 'Simulated Authentication',
        description:
          'Built a secure client-side auth system that handles Registration, Login validation, and Route Protection using browser storage to simulate a real database experience.',
      },
    ],
  },
};

export default projectDetails;
