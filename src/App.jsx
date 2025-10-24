import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'

function App() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header untuk membungkus dan memposisikan Navbar */}
        <header className="flex justify-center py-6">
          <Navbar />
        </header>
        
        {/* Tampilkan Hero Section di bawahnya */}
        <Hero />
      </div>
    </main>
  );
}

export default App;