import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreatorGrid from './components/CreatorGrid';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <CreatorGrid />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 bg-black/90 py-8 text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} OnlyFans Inspire. Все права защищены.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white">Правила</a>
              <a href="#" className="hover:text-white">Политика</a>
              <a href="#" className="hover:text-white">Поддержка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
