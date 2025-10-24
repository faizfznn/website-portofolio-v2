import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Tempatkan komponen Navbar di sini */}
      <Navbar />

      {/* Konten lain dari halaman web bisa ditambahkan di bawah ini */}
      <div className="mt-8 text-white">
        <h1 className="text-4xl font-bold">Selamat Datang di Website Portofolio</h1>
        <p className="text-lg text-gray-400">Ini adalah halaman utama.</p>
      </div>
    </div>
  );
}

export default App;