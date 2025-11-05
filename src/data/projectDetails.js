// src/data/projectDetails.js

// Impor semua gambar yang Anda perlukan
import cerebellumImg from "../assets/cerebellum.png";
import mitsaqImg from "../assets/mitsaq.png";
import mentraImg from "../assets/mentra.png";
import veloraImg from "../assets/velora.png";

// Placeholder untuk foto tim dan gambar bento/design system
import teamPhoto1 from "../assets/foto1.jpg";
import teamPhoto2 from "../assets/foto2.jpg";
import teamPhoto3 from "../assets/foto3.jpg";
import dsImage from "../assets/velora.png"; // Ganti dengan gambar design system Anda

const projectDetails = {
  // --- Proyek CEREBELLUM ---
  cerebellum: {
    overview:
      "Cerebellum is a learning platform designed to bridge the gap between education and industry. It empowers vocational students to reach their better future through curated content and mentorship.",
    team: [
      {
        name: "Faiz Fauzan",
        image: teamPhoto1,
        linkedin: "https://linkedin.com/in/muhammadfaizfauzan",
      },
      { name: "Rekan 1", image: teamPhoto2, linkedin: "https://linkedin.com" },
      { name: "Rekan 2", image: teamPhoto3, linkedin: "https://linkedin.com" },
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
      { hex: "#1C6EA4", name: "Primary Blue" },
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
    figmaLink: "httpsF://www.figma.com/embed?embed_host=share&url=...", // Ganti dengan link Anda
  },

  // --- Proyek MITSAQ ---
  mitsaq: {
    overview:
      "Mitsaq is a religious learning app aimed at building daily habits and providing educational resources for users.",
    team: [
      {
        name: "Faiz Fauzan",
        image: teamPhoto1,
        linkedin: "https://linkedin.com/in/muhammadfaizfauzan",
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
      { hex: "#368743", name: "Primary Green" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    typography: {
      fontFamily: "Inter",
      description:
        "Inter is used for high readability, making it perfect for both small text and UI elements.",
    },
    designSystemImages: [dsImage, dsImage],
    logoImages: [
      { src: mitsaqImg, label: "Color" },
      { src: mitsaqImg, label: "Monochrome (Light)" },
      { src: mitsaqImg, label: "Monochrome (Dark)" },
    ],
    bentoImages: [mitsaqImg, cerebellumImg, mentraImg],
    figmaLink: "https://www.figma.com/embed?embed_host=share&url=...",
  },

  // --- Proyek MENTRA ---
  mentra: {
    overview:
      "Mentra is a mental health app that provides quick access to mindfulness tools, breathing exercises, and professional support.",
    team: [
      {
        name: "Faiz Fauzan",
        image: teamPhoto1,
        linkedin: "https://linkedin.com/in/muhammadfaizfauzan",
      },
      { name: "Rekan 1", image: teamPhoto2, linkedin: "https://linkedin.com" },
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
      { hex: "#4CA8E0", name: "Primary Blue" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
    typography: {
      fontFamily: "Inter",
      description:
        "Inter is used for high readability, making it perfect for both small text and UI elements.",
    },
    designSystemImages: [dsImage, dsImage],
    logoImages: [
      { src: mentraImg, label: "Color" },
      { src: mentraImg, label: "Monochrome (Light)" },
      { src: mentraImg, label: "Monochrome (Dark)" },
    ],
    bentoImages: [mentraImg, veloraImg, mitsaqImg],
    figmaLink: "https://www.figma.com/embed?embed_host=share&url=...",
  },

  // --- Proyek VELORA ---
  velora: {
    overview:
      "Velora is a food delivery app that connects local producers with consumers seeking fresh, sustainable ingredients.",
    team: [
      {
        name: "Faiz Fauzan",
        image: teamPhoto1,
        linkedin: "https://linkedin.com/in/muhammadfaizfauzan",
      },
      { name: "Rekan 1", image: teamPhoto2, linkedin: "https://linkedin.com" },
      { name: "Rekan 2", image: teamPhoto3, linkedin: "https://linkedin.com" },
    ],
    role: ["Lead Designer", "UI/UX Design", "Branding"],
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
      { hex: "#91C752", name: "Primary Green" },
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
