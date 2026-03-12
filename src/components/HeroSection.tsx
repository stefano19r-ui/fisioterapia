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
    <section id="inicio" className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-secondary/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium">
              <Activity className="h-4 w-4 text-accent" />
              <span className="text-black font-bold">Stefano Ricci - Fisioterapista</span>
            </div>

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

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 z-20 animate-bounce-slow max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Certificato</p>
                  <p className="text-xs text-muted-foreground">Albo Fisioterapisti</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 z-20 animate-bounce-slow max-w-[200px]" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Cura Personale</p>
                  <p className="text-xs text-muted-foreground">Approccio umano</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;