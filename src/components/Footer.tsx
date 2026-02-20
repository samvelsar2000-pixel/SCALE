import { Link } from 'react-router-dom';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const Footer = () => (
  <footer className="border-t border-zinc-800 bg-black px-4 py-10 sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} SCALE. All rights reserved.</p>
      <div className="flex flex-wrap gap-5">
        <button onClick={() => scrollTo('services')}>Услуги</button>
        <button onClick={() => scrollTo('cases')}>Кейсы</button>
        <a href="https://t.me/scale_agency">Telegram</a>
        <a href="https://www.linkedin.com">LinkedIn</a>
        <Link to="/privacy">Политика конфиденциальности</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
