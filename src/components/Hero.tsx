import SectionMotion from './SectionMotion';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

const Hero = () => {
  return (
    <SectionMotion className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-8" id="top">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.1),transparent_30%),linear-gradient(180deg,#0a0a0a_0%,#111_50%,#000_100%)]" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-400">performance + strategy + creative</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Маркетинг, который
            <br />
            масштабирует бизнес
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            SCALE соединяет аналитику, стратегию и креатив в единую систему роста, чтобы вы получали
            предсказуемый поток клиентов.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={() => scrollTo('contacts')} className="btn-primary">
              Получить аудит
            </button>
            <button onClick={() => scrollTo('cases')} className="btn-secondary">
              Смотреть кейсы
            </button>
          </div>
        </div>
      </div>
    </SectionMotion>
  );
};

export default Hero;
