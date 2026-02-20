import SectionMotion from './SectionMotion';

const metrics = [
  ['+78%', 'средний рост SQL'],
  ['-29%', 'снижение CPL'],
  ['x2.1', 'медианный ROAS'],
  ['34%', 'рост LTV/CAC'],
  ['11 дней', 'до первого масштабирования']
];

const Results = () => (
  <SectionMotion id="results" className="px-4 py-20 sm:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="section-title text-white">Результаты</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map(([value, caption]) => (
          <article key={value} className="card-dark text-center">
            <p className="text-4xl font-semibold text-white">{value}</p>
            <p className="mt-3 text-sm text-zinc-400">{caption}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-xs text-zinc-500">* Средние значения по проектам SCALE за последние 12 месяцев.</p>
    </div>
  </SectionMotion>
);

export default Results;
