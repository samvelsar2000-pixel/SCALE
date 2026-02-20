import Cases from '../components/Cases';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LogosMarquee from '../components/LogosMarquee';
import Process from '../components/Process';
import Results from '../components/Results';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <LogosMarquee />
      <Services />
      <Cases />
      <Process />
      <Results />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
