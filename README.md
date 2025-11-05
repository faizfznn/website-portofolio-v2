# Website Portofolio Pribadi (v2) - Faiz Fauzan

Ini adalah repositori untuk website portofolio pribadi saya, yang dirancang dan dikembangkan untuk menampilkan proyek-proyek UI/UX dan keahlian *frontend development*. Website ini dibuat dari awal dengan fokus pada desain modern, interaksi mikro yang halus, dan arsitektur kode yang bersih.


---

## ✨ Fitur Utama

Proyek ini bukan sekadar portofolio statis. Ini adalah kumpulan komponen interaktif yang menunjukkan keahlian dalam desain dan pengembangan:

* **Glassmorphism Navbar:** Navbar *sticky* dengan efek kaca (`backdrop-blur`) dan kilau (`gradient`, `inset-shadow`) yang kompleks.
* **Animasi Mikro Lanjutan:**
    * Tombol interaktif dengan partikel bintang berputar (`animate-spin-slow`) dan efek *hover* yang canggih.
    * Animasi teks *slide-up* ganda pada tombol "See Portfolio".
    * Ikon sosial media di *footer* yang "melompat" saat di-*hover*.
* **Animasi Scroll-Reveal:** Konten halaman muncul secara bertahap (fade-in & slide-up) saat di-*scroll* menggunakan `framer-motion` dan `react-intersection-observer`.
* **Pemutar Musik Vinyl Interaktif:** Komponen `Album` kustom yang dapat memutar/menjeda musik, lengkap dengan animasi piringan vinil yang bergeser dan berputar, serta *state* global menggunakan React Context (`AlbumContext.tsx`).
* **Routing & Layout Dinamis:**
    * Menggunakan `react-router-dom` untuk navigasi multi-halaman (`Home`, `Portfolio`, `About Me`, `Project Detail`).
    * Halaman detail proyek (`ProjectDetailPage.jsx`) yang dinamis dengan *sidebar* *scroll-spy* yang menyorot bagian aktif secara otomatis.
* **Jam Real-time:** Menampilkan waktu lokal di Malang, Indonesia yang diperbarui setiap detik menggunakan *hook* `useState` dan `useEffect`.
* **Desain Responsif:** Didesain untuk tampil baik di perangkat desktop maupun *mobile*.

---

## 🚀 Teknologi yang Digunakan

### Dependensi Utama
* **React 19**
* **Vite** sebagai *build tool*
* **Tailwind CSS** untuk *utility-first styling*
* **React Router v7** untuk *client-side routing*
* **Framer Motion** untuk animasi
* **React Intersection Observer** untuk memicu animasi saat *scroll*
* **React Icons** & **Lucide React** untuk ikonografi
* **TypeScript** (digunakan pada komponen `Album.tsx` dan `AlbumContext.tsx`)

### Dev Dependencies
* ESLint
* @vitejs/plugin-react

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
