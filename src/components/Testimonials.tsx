import { testimonials } from '../data/testimonials';
import SectionMotion from './SectionMotion';

const Testimonials = () => (
  <SectionMotion id="testimonials" className="bg-white px-4 py-20 text-black sm:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="section-title">Отзывы</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="card-light min-h-64">
            <p className="text-zinc-700">“{item.text}”</p>
            <div className="mt-8 border-t border-zinc-200 pt-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-zinc-600">
                {item.role}, {item.company}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </SectionMotion>
);

export default Testimonials;
