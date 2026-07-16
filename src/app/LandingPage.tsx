import { EmpathySection } from '../components/sections/EmpathySection';
import { FaqSection } from '../components/sections/FaqSection';
import { FeaturedProcedureSection } from '../components/sections/FeaturedProcedureSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProtocolSection } from '../components/sections/ProtocolSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { SpecialistSection } from '../components/sections/SpecialistSection';
import { FloatingWhatsAppButton } from '../components/layout/FloatingWhatsAppButton';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';
import { Preloader } from '../components/layout/Preloader';
import { ScrollProgressBar } from '../components/layout/ScrollProgressBar';
import { SkipToContent } from '../components/layout/SkipToContent';
import { useDataLayer } from '../hooks/useDataLayer';
import { useFabVisible } from '../hooks/useFabVisible';
import { usePreloader } from '../hooks/usePreloader';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LandingPage() {
  const { isLoading, skip } = usePreloader();
  const { scrolled, scrollProgress } = useScrollProgress(!isLoading);
  const fabVisible = useFabVisible(!isLoading, scrolled);

  useDataLayer();
  useScrollReveal(!isLoading);

  return (
    <div className="min-h-screen bg-espresso text-muted font-sans selection:bg-rose-nude selection:text-espresso overflow-x-hidden relative">
      <SkipToContent targetId="main-content" />
      <ScrollProgressBar progress={scrollProgress} />
      <Preloader isLoading={isLoading} onSkip={skip} />
      <Header scrolled={scrolled} />
      <MobileBottomNav />

      <main id="main-content" className="fab-clearance mobile-nav-clearance">
        <HeroSection />
        <EmpathySection />
        <FeaturedProcedureSection />
        <ProtocolSection />
        <PortfolioSection />
        <SpecialistSection />
        <ReviewsSection />
        <FinalCtaSection />
        <PartnersSection />
        <FaqSection />
      </main>

      <Footer />
      <FloatingWhatsAppButton visible={fabVisible} isReady={!isLoading} />
    </div>
  );
}
