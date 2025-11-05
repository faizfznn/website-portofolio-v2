// src/data/projectDetails.js

// Impor semua gambar yang Anda perlukan
import cerebellumImg from "../assets/cerebellum.png";
import mitsaqImg from "../assets/mitsaq.png";
import mentraImg from "../assets/mentra.png";
import veloraImg from "../assets/velora.png";

// Logo Apps
import logoMentra from "../assets/logoMentra.png";

// Placeholder untuk foto tim dan gambar bento/design system
import akhdan from "../assets/akhdan.jpg";
import rara from "../assets/rara.jpg";
import ariq from "../assets/ariq.jpeg";
import dsImage from "../assets/velora.png"; // Ganti dengan gambar design system Anda

const projectDetails = {
  // --- Proyek CEREBELLUM ---
  cerebellum: {
    overview:
      "Cerebellum is a learning platform designed to bridge the gap between education and industry. It empowers vocational students to reach their better future through curated content and mentorship.",
    team: [
      {
        name: "Ariiq Tsany Zu",
        image: ariq,
        linkedin: "https://www.linkedin.com/in/tsanyzzu/",
      },
      {
        name: "Fira Zaha Iklila",
        image: rara,
        linkedin: "https://www.linkedin.com/in/firaiklila/",
      },
    ],
    role: ["Solo Designer", "UX & UI Design", "Documentation"],
    timeline: "Sep '23 – Jan '24 (4 months)",
    // Bagian Problems & Solutions
    problems: [
      {
        title: "Complex Navigation",
        description:
          "Users need to quickly find and browse projects without feeling overwhelmed.",
      },
      {
        title: "Unclear Process",
        description:
          "A complicated booking process can lead to high abandonment rates.",
      },
      {
        title: "Communication Tools",
        description:
          "Effective communication between renters and owners is crucial for success.",
      },
    ],
    solutions: [
      {
        title: "Simplified Navigation",
        description:
          "I enhanced the user experience by implementing a streamlined navigation system.",
      },
      {
        title: "Intuitive Booking Flow",
        description:
          "I redesigned the booking process into simple, manageable steps.",
      },
      {
        title: "Enhanced Communication",
        description:
          "To facilitate effective communication, I introduced a built-in messaging system.",
      },
    ],
    colors: [
      { hex: "#1C6EA4", name: "Primary" },
      { hex: "#E66923", name: "Secondary" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    typography: {
      fontFamily: "Inter",
      description:
        "Inter is used for high readability, making it perfect for both small text and UI elements.",
    },
    designSystemImages: [dsImage, dsImage], // Tambahkan gambar-gambar design system di sini
    logoImages: [
      { src: cerebellumImg, label: "Color" },
      { src: cerebellumImg, label: "Monochrome (Light)" },
      { src: cerebellumImg, label: "Monochrome (Dark)" },
    ],
    bentoImages: [cerebellumImg, mitsaqImg, veloraImg],
    figmaLink:
      "https://embed.figma.com/proto/UdoWaLKHbYA8JYphlERo4g/CITEUP?page-id=11%3A2251&node-id=84-5888&viewport=2654%2C2398%2C0.92&scaling=cover&content-scaling=fixed&starting-point-node-id=84%3A5888&show-proto-sidebar=1&embed-host=share&hide-ui=1", // Ganti dengan link Anda
  },

  // --- Proyek MITSAQ ---
  mitsaq: {
    overview:
      "Mitsaq is a religious learning app aimed at building daily habits and providing educational resources for users.",
    team: [
      {
        name: "Ariiq Tsany Zu",
        image: ariq,
        linkedin: "https://www.linkedin.com/in/tsanyzzu/",
      },
      {
        name: "Fira Zaha Iklila",
        image: rara,
        linkedin: "https://www.linkedin.com/in/firaiklila/",
      },
    ],
    role: ["Solo Designer", "UI/UX Research", "Branding"],
    timeline: "Feb '24 – Mar '24 (2 months)",
    problems: [
      {
        title: "Complex Navigation",
        description:
          "Users need to quickly find and browse projects without feeling overwhelmed.",
      },
      {
        title: "Unclear Process",
        description:
          "A complicated booking process can lead to high abandonment rates.",
      },
      {
        title: "Communication Tools",
        description:
          "Effective communication between renters and owners is crucial for success.",
      },
    ],
    solutions: [
      {
        title: "Simplified Navigation",
        description:
          "I enhanced the user experience by implementing a streamlined navigation system.",
      },
      {
        title: "Intuitive Booking Flow",
        description:
          "I redesigned the booking process into simple, manageable steps.",
      },
      {
        title: "Enhanced Communication",
        description:
          "To facilitate effective communication, I introduced a built-in messaging system.",
      },
    ],
    colors: [
      { hex: "#368743", name: "Primary" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    typography: {
      fontFamily: "Poppins",
      description:
        "Poppins",
    },
    designSystemImages: [dsImage, dsImage],
    logoImages: [
      { src: mitsaqImg, label: "Color" },
      { src: mitsaqImg, label: "Monochrome (Light)" },
      { src: mitsaqImg, label: "Monochrome (Dark)" },
    ],
    bentoImages: [mitsaqImg, cerebellumImg, mentraImg],
    figmaLink:
      "https://embed.figma.com/proto/VQrE9qzQWOKSXMUT4GSRfi/MTQ_Mitsaq?page-id=646%3A21721&node-id=671-105613&p=f&viewport=3006%2C-7690%2C0.52&scaling=cover&content-scaling=fixed&starting-point-node-id=671%3A107892&embed-host=share&hide-ui=1",
  },

  // --- Proyek MENTRA ---
  mentra: {
    overview:
      "Mentra is a mental health app that provides quick access to mindfulness tools, breathing exercises, and professional support.",
    team: [
      {
        name: "Ariiq Tsany Zu",
        image: ariq,
        linkedin: "https://www.linkedin.com/in/tsanyzzu/",
      },
    ],
    role: ["UI/UX Designer", "Prototyping"],
    timeline: "Apr '24 – May '24 (1 month)",
    problems: [
      {
        title: "Complex Navigation",
        description:
          "Users need to quickly find and browse projects without feeling overwhelmed.",
      },
      {
        title: "Unclear Process",
        description:
          "A complicated booking process can lead to high abandonment rates.",
      },
      {
        title: "Communication Tools",
        description:
          "Effective communication between renters and owners is crucial for success.",
      },
    ],
    solutions: [
      {
        title: "Simplified Navigation",
        description:
          "I enhanced the user experience by implementing a streamlined navigation system.",
      },
      {
        title: "Intuitive Booking Flow",
        description:
          "I redesigned the booking process into simple, manageable steps.",
      },
      {
        title: "Enhanced Communication",
        description:
          "To facilitate effective communication, I introduced a built-in messaging system.",
      },
    ],
    colors: [
      { hex: "#4CA8E0", name: "Primary" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    typography: {
      fontFamily: "Sf Pro Text",
      description:
        "Sf Pro.",
    },
    designSystemImages: [dsImage, dsImage],
    logoImages: [
      { src: logoMentra, label: "Color" },

    ],
    bentoImages: [mentraImg, veloraImg, mitsaqImg],
    figmaLink:
      "https://embed.figma.com/proto/n750lg99vaSoKTwxRtRaTJ/HITC_MENTRA?page-id=1%3A8&node-id=963-15115&p=f&viewport=-2783%2C-788%2C0.23&scaling=cover&content-scaling=fixed&starting-point-node-id=156%3A1245&embed-host=share&hide-ui=1",
  },

  // --- Proyek VELORA ---
  velora: {
    overview:
      "Velora is a food delivery app that connects local producers with consumers seeking fresh, sustainable ingredients.",
    team: [
      {
        name: "Ariiq Tsany Zu",
        image: ariq,
        linkedin: "https://www.linkedin.com/in/tsanyzzu/",
      },
      {
        name: "Naufal Akhdan",
        image: akhdan,
        linkedin: "https://www.linkedin.com/in/naufal-akhdan-899918289/",
      },
    ],
    role: ["UI/UX Design", "UX Research", "Prototyping"],
    timeline: "Jun '24 – Aug '24 (3 months)",
    problems: [
      {
        title: "Complex Navigation",
        description:
          "Users need to quickly find and browse projects without feeling overwhelmed.",
      },
      {
        title: "Unclear Process",
        description:
          "A complicated booking process can lead to high abandonment rates.",
      },
      {
        title: "Communication Tools",
        description:
          "Effective communication between renters and owners is crucial for success.",
      },
    ],
    solutions: [
      {
        title: "Simplified Navigation",
        description:
          "I enhanced the user experience by implementing a streamlined navigation system.",
      },
      {
        title: "Intuitive Booking Flow",
        description:
          "I redesigned the booking process into simple, manageable steps.",
      },
      {
        title: "Enhanced Communication",
        description:
          "To facilitate effective communication, I introduced a built-in messaging system.",
      },
    ],
    colors: [
      { hex: "#91C752", name: "Primary" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    typography: {
      fontFamily: "Inter",
      description:
        "Inter is used for high readability, making it perfect for both small text and UI elements.",
    },
    designSystemImages: [dsImage, dsImage, dsImage, dsImage], // Bisa 4 gambar
    logoImages: [
      { src: veloraImg, label: "Color" },
      { src: veloraImg, label: "Monochrome (Light)" },
      { src: veloraImg, label: "Monochrome (Dark)" },
    ],
    bentoImages: [veloraImg, mitsaqImg, cerebellumImg],
    // PERBAIKAN: Menghapus '&show-proto-sidebar=1'
    figmaLink:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiAoMTa6aw42i1HAJ5U0iQL%2FINSPACE_VELORA%3Fpage-id%3D1396%253A15723%26node-id%3D1503-45930%26viewport%3D-327%252C339%252C0.28%26scaling%3Dcover%26content-scaling%3Dfixed%26starting-point-node-id%3D1503%253A45880%26hide-ui%3D1",
  },
};

export default projectDetails;
