import { Star } from 'lucide-react';

const creators = [
  {
    id: 1,
    name: 'Ava Summers',
    username: '@avas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    price: 9.99,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Liam Carter',
    username: '@liamc',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1600&auto=format&fit=crop',
    price: 7.99,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Mia Lopez',
    username: '@mial',
    avatar: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1600&auto=format&fit=crop',
    price: 12.99,
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Noah Reed',
    username: '@noah',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop',
    price: 6.5,
    rating: 4.7,
  },
];

function CreatorCard({ creator }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative h-40 w-full overflow-hidden">
        <img src={creator.cover} alt={creator.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <img src={creator.avatar} alt={creator.name} className="absolute -bottom-6 left-4 h-16 w-16 rounded-full border-2 border-white object-cover" />
      </div>
      <div className="px-4 pb-4 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white">{creator.name}</div>
            <div className="text-sm text-white/60">{creator.username}</div>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-4 w-4 fill-amber-400" />
            <span className="text-sm">{creator.rating}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-white"><span className="text-lg font-bold">${creator.price}</span> / мес</div>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">Подписаться</button>
        </div>
      </div>
    </div>
  );
}

export default function CreatorGrid() {
  return (
    <section className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Популярные авторы</h2>
          <button className="text-sm text-white/70 hover:text-white">Показать все</button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {creators.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
