import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { VesselTypes } from '../components/VesselTypes';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StoriesFromTheSea } from '../components/StoriesFromTheSea';
import { Testimonials } from '../components/Testimonials';
import { VideoShowcase } from '../components/VideoShowcase';
import { BentoGrid } from '../components/BentoGrid';
import { Newsletter } from '../components/Newsletter';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <VesselTypes />
      <WhyChooseUs />
      <StoriesFromTheSea />
      <Testimonials />
      <VideoShowcase />
      <BentoGrid />
      <Newsletter />
      <Contact />
    </>
  );
}
