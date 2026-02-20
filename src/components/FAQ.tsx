import { useState } from 'react';
import { faq } from '../data/faq';
import SectionMotion from './SectionMotion';

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <SectionMotion id="faq" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title text-white">FAQ</h2>
        <div className="mt-10 space-y-3">
          {faq.map((item, index) => (
            <article key={item.question} className="card-dark">
              <button className="flex w-full items-center justify-between gap-4" onClick={() => setActive(active === index ? null : index)}>
                <span className="text-left text-lg text-white">{item.question}</span>
                <span className="text-zinc-400">{active === index ? '−' : '+'}</span>
              </button>
              {active === index && <p className="mt-4 text-sm text-zinc-300">{item.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </SectionMotion>
  );
};

export default FAQ;
