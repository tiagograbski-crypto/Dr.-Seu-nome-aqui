import { FloatingWhatsAppButton } from '../components/layout/FloatingWhatsAppButton';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Preloader } from '../components/layout/Preloader';
import { ScrollProgressBar } from '../components/layout/ScrollProgressBar';
import { SkipToContent } from '../components/layout/SkipToContent';
import { EmpathySection } from '../components/sections/EmpathySection';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProtocolSection } from '../components/sections/ProtocolSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { SpecialistSection } from '../components/sections/SpecialistSection';
import { useDataLayer } from '../hooks/useDataLayer';
import { usePreloader } from '../hooks/usePreloader';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LandingPage() {
  const { isLoading, skip } = usePreloader();
  const { scrolled, scrollProgress } = useScrollProgress(!isLoading);

  useDataLayer();
  useScrollReveal(!isLoading);

  return (
    <div className="min-h-screen bg-espresso text-muted font-sans selection:bg-rose-nude selection:text-espresso overflow-x-hidden relative">
      <SkipToContent targetId="main-content" />
      <ScrollProgressBar progress={scrollProgress} />
      <Preloader isLoading={isLoading} onSkip={skip} />
      <Header scrolled={scrolled} />

      <main id="main-content" className="fab-clearance">
        <HeroSection />
        <PartnersSection />
        <EmpathySection />
        <ProtocolSection />
        <PortfolioSection />
        <SpecialistSection />
        <FinalCtaSection />
        <ReviewsSection />
        <FaqSection />
      </main>

      <Footer />
      <FloatingWhatsAppButton visible={scrolled} />
    </div>
  );
}
