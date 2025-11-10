import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Бесплатно',
    price: '0₽',
    desc: 'Откройте для себя платформу',
    features: ['Подписка на 3 авторов', 'Лайки и комментарии', 'Базовые уведомления'],
  },
  {
    name: 'Премиум',
    price: '499₽',
    desc: 'Больше авторов и возможностей',
    features: ['Подписка на 20 авторов', 'Приоритетные уведомления', 'Чаты с реакциями'],
  },
  {
    name: 'Создатель',
    price: '0₽',
    desc: 'Начните зарабатывать на контенте',
    features: ['Монетизация подписок', 'Платные сообщения', 'Аналитика доходов'],
  },
];

function Tier({ tier }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-sm">
      <div className="text-sm text-white/60">{tier.desc}</div>
      <div className="mt-2 text-3xl font-bold">{tier.price}</div>
      <div className="mt-1 text-white/70">{tier.name}</div>
      <ul className="mt-6 space-y-3 text-sm">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">Выбрать</button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="bg-zinc-950 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white">Тарифы</h2>
        <p className="mt-2 text-center text-white/70">Простая и прозрачная стоимость</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <Tier key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
