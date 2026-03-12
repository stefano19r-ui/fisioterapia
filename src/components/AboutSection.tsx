import { Button } from "@/components/ui/button";
import { CheckCircle, Award, BookOpen, Medal } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Medal, text: t("about.check1") },
    { icon: Award, text: t("about.check2") },
    { icon: BookOpen, text: t("about.check3") },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative animate-fade-up">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://cdn.create.vista.com/api/media/medium/268406250/stock-photo-smiling-physiotherapist-happy-football-player-showing-thumb-hospital?token="
                alt="Stefano Ricci"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("about.title")}
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                {t("about.bio1")}
              </p>
              <div className="p-4 bg-white/50 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-foreground">
                  {t("about.bio2")}
                </p>
              </div>
              <p>
                {t("about.bio3")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-border/50">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary-soft text-white px-8 py-6 h-auto shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1"
              >
                {t("nav.book")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;