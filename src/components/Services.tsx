import { services } from '../data/services';
import SectionMotion from './SectionMotion';

const Services = () => {
  return (
    <SectionMotion id="services" className="bg-white px-4 py-20 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Услуги</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-light">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-zinc-700">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-800">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SectionMotion>
  );
};

export default Services;
