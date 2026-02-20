import SectionMotion from './SectionMotion';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const CTA = () => (
  <SectionMotion className="px-4 pb-20 sm:px-8">
    <div className="mx-auto max-w-7xl rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">SCALE</p>
      <h2 className="mt-3 text-3xl font-semibold text-white">Готовы масштабировать маркетинг без хаоса?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Проведем аудит, найдем точки роста и соберем реалистичный план действий под ваши KPI.</p>
      <button onClick={() => scrollTo('contacts')} className="btn-primary mt-8 inline-block">
        Запросить стратегическую сессию
      </button>
    </div>
  </SectionMotion>
);

export default CTA;
