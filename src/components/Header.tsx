import { useEffect, useState } from 'react';

const navItems = [
  ['Услуги', 'services'],
  ['Кейсы', 'cases'],
  ['Процесс', 'process'],
  ['Результаты', 'results'],
  ['Отзывы', 'testimonials'],
  ['FAQ', 'faq'],
  ['Контакты', 'contacts']
] as const;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 px-5 py-3 transition ${
          scrolled ? 'bg-black/75 shadow-xl shadow-black/20 backdrop-blur-xl' : 'bg-black/35 backdrop-blur-md'
        }`}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-lg font-semibold tracking-[0.25em] text-white">
          SCALE
        </button>
        <nav className="hidden gap-5 text-sm text-zinc-300 lg:flex">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="transition hover:text-white">
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollTo('contacts')}
          className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
        >
          Обсудить проект
        </button>
      </div>
    </header>
  );
};

export default Header;
