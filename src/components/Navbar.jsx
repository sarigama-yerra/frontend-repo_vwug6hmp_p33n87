import { User, Search, PlusCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500" />
          <span className="text-lg font-semibold tracking-tight text-white">OnlyFans Inspire</span>
        </div>
        <div className="hidden w-full max-w-lg items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white shadow-sm sm:flex">
          <Search className="h-4 w-4 text-white/60" />
          <input
            placeholder="Поиск авторов, тегов, коллекций"
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
            <PlusCircle className="h-4 w-4" />
            Стать автором
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
            <User className="h-4 w-4" />
            Войти
          </button>
        </div>
      </div>
    </header>
  );
}
