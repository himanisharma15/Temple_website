import { Helmet } from 'react-helmet-async';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import AboutSection from './sections/AboutSection';
import OriginSection from './sections/OriginSection';
import FestivalsSection from './sections/FestivalsSection';
import GallerySection from './sections/GallerySection';
import ArchitectureSection from './sections/ArchitectureSection';
import LocationSection from './sections/LocationSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shree Dhabaleswar Mandira</title>
        <meta name="description" content="Shree Dhabaleswar Mandira on an island in the Mahanadi River near Cuttack, Odisha." />
      </Helmet>
      <HeroSlider />
      <main>
        <AboutSection />
        <OriginSection />
        <FestivalsSection />
        <GallerySection />
        <ArchitectureSection />
        <LocationSection />
      </main>
    </>
  );
}
