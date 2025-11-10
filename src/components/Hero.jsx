import { Star, Shield, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Подпишись на любимых авторов. Поддержи их творчество.
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Эксклюзивный контент, приватные сторис и личное общение — все в одном месте.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90">
                Начать бесплатно
              </button>
              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20">
                Я — автор
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Безопасные платежи</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4"/> Топ-рейтинги</div>
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4"/> Быстрый старт</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                alt="Creators preview"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-40 rounded-xl border border-white/10 bg-black/60 p-3 text-sm shadow-xl backdrop-blur md:block">
              <div className="font-semibold">Подписчики</div>
              <div className="mt-1 text-white/70">+1,248 за неделю</div>
            </div>
            <div className="absolute -top-6 -right-6 hidden w-44 rounded-xl border border-white/10 bg-black/60 p-3 text-sm shadow-xl backdrop-blur md:block">
              <div className="font-semibold">Доход</div>
              <div className="mt-1 text-green-400">+$3,560</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
