import { useState } from 'react';
import { cases } from '../data/cases';
import SectionMotion from './SectionMotion';

const Cases = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionMotion id="cases" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title text-white">Кейсы</h2>
        <div className="mt-10 space-y-4">
          {cases.map((item, index) => (
            <article key={item.brand} className="card-dark">
              <button className="w-full text-left" onClick={() => setOpen(open === index ? null : index)}>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.industry}</p>
                    <h3 className="mt-2 text-2xl text-white">{item.brand}</h3>
                  </div>
                  <span className="text-sm text-zinc-300">{open === index ? 'Скрыть' : 'Подробнее'}</span>
                </div>
              </button>
              {open === index && (
                <div className="mt-6 space-y-3 border-t border-zinc-700 pt-5 text-sm text-zinc-300">
                  <p>
                    <strong className="text-white">Задача:</strong> {item.challenge}
                  </p>
                  <p>
                    <strong className="text-white">Решение:</strong> {item.solution}
                  </p>
                  <p>
                    <strong className="text-white">Результат:</strong> {item.result}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </SectionMotion>
  );
};

export default Cases;
