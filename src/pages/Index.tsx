import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import BookingSection from "@/components/BookingSection";
import PricesSection from "@/components/PricesSection";
import { LanguageProvider } from "@/components/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricesSection />
        <BookingSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
