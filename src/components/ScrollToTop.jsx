// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Dapatkan 'pathname' (path URL saat ini, misal: "/about")
  const { pathname } = useLocation();

  // Gunakan 'useEffect' untuk menjalankan kode SETIAP KALI 'pathname' berubah.
  // Ini otomatis mencakup navigasi DAN refresh halaman.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 'instant' berarti langsung, tanpa animasi
    });
  }, [pathname]); // <-- Kunci utamanya ada di sini

  return null; // Komponen ini tidak perlu me-render apapun
}