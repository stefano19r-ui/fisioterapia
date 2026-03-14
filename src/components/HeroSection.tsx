import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Heart, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-soft text-white text-lg px-8 py-6 h-auto shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg px-8 py-6 h-auto border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
              >
                {t("nav.services")}
              </Button>
            </div>


          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/avatar/b8561ae2/b8561ae2-0bde-4fef-b7ef-39b8955caf03_large.jpg"
                alt="Physiotherapy Session"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;