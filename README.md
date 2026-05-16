# Website Portofolio Pribadi (v2) - Faiz Fauzan

Ini adalah repositori untuk website portofolio pribadi saya, yang dirancang dan dikembangkan untuk menampilkan proyek-proyek UI/UX dan keahlian _frontend development_. Website ini dibuat dari awal dengan fokus pada desain modern, interaksi mikro yang halus, dan arsitektur kode yang bersih.

---

## ✨ Fitur Utama

Proyek ini bukan sekadar portofolio statis. Ini adalah kumpulan komponen interaktif yang menunjukkan keahlian dalam desain dan pengembangan:

- **Glassmorphism Navbar:** Navbar _sticky_ dengan efek kaca (`backdrop-blur`) dan kilau (`gradient`, `inset-shadow`) yang kompleks.
- **Animasi Mikro Lanjutan:**
  - Tombol interaktif dengan partikel bintang berputar (`animate-spin-slow`) dan efek _hover_ yang canggih.
  - Animasi teks _slide-up_ ganda pada tombol "See Portfolio".
  - Ikon sosial media di _footer_ yang "melompat" saat di-_hover_.
- **Animasi Scroll-Reveal:** Konten halaman muncul secara bertahap (fade-in & slide-up) saat di-_scroll_ menggunakan `framer-motion` dan `react-intersection-observer`.
- **Pemutar Musik Vinyl Interaktif:** Komponen `Album` kustom yang dapat memutar/menjeda musik, lengkap dengan animasi piringan vinil yang bergeser dan berputar, serta _state_ global menggunakan React Context (`AlbumContext.tsx`).
- **Routing & Layout Dinamis:**
  - Menggunakan `react-router-dom` untuk navigasi multi-halaman (`Home`, `Portfolio`, `About Me`, `Project Detail`).
  - Halaman detail proyek (`ProjectDetailPage.jsx`) yang dinamis dengan _sidebar_ _scroll-spy_ yang menyorot bagian aktif secara otomatis.
- **Jam Real-time:** Menampilkan waktu lokal di Malang, Indonesia yang diperbarui setiap detik menggunakan _hook_ `useState` dan `useEffect`.
- **Desain Responsif:** Didesain untuk tampil baik di perangkat desktop maupun _mobile_.

---

## 🚀 Teknologi yang Digunakan

### Dependensi Utama

- **React 19**
- **Vite** sebagai _build tool_
- **Tailwind CSS** untuk _utility-first styling_
- **React Router v7** untuk _client-side routing_
- **Framer Motion** untuk animasi
- **React Intersection Observer** untuk memicu animasi saat _scroll_
- **React Icons** & **Lucide React** untuk ikonografi
- **TypeScript** (digunakan pada komponen `Album.tsx` dan `AlbumContext.tsx`)

### Dev Dependencies

- ESLint
- @vitejs/plugin-react

---

## 📦 Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di mesin lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori:**

    ```sh
    git clone [https://github.com/faizfznn/website-portofolio-v2.git](https://github.com/faizfznn/website-portofolio-v2.git)
    ```

2.  **Masuk ke direktori proyek:**

    ```sh
    cd website-portofolio-v2
    ```

3.  **Install dependensi:**

    ```sh
    npm install
    ```

4.  **Jalankan development server:**

    ```sh
    npm run dev
    ```

5.  Buka [http://localhost:5173](http://localhost:5173) (atau port lain yang ditampilkan) di browser Anda.

---
