import SectionMotion from './SectionMotion';

const steps = ['Диагностика', 'Стратегия', 'Запуск и тесты', 'Оптимизация', 'Масштабирование'];

const Process = () => (
  <SectionMotion id="process" className="bg-white px-4 py-20 text-black sm:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="section-title">Процесс</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <article key={step} className="card-light min-h-36">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Шаг {index + 1}</p>
            <h3 className="mt-4 text-xl font-semibold">{step}</h3>
          </article>
        ))}
      </div>
    </div>
  </SectionMotion>
);

export default Process;
