import SectionMotion from './SectionMotion';

const logos = ['ATLAS', 'NOVA', 'LUMEN', 'NORD', 'VANTA', 'ORBIT', 'DELTA', 'FORGE', 'SIGMA', 'MIRA'];

const LogosMarquee = () => {
  return (
    <SectionMotion className="border-y border-zinc-800 bg-black/70 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">Нам доверяют</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, index) => (
              <span key={`${logo}-${index}`} className="logo-pill">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionMotion>
  );
};

export default LogosMarquee;
