import { Hand, UserCheck, Activity, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("service.manual"),
      description: t("service.manual.desc"),
      icon: Hand,
    },
    {
      title: t("service.rehab"),
      description: t("service.rehab.desc"),
      icon: UserCheck,
    },
    {
      title: t("service.sport"),
      description: t("service.sport.desc"),
      icon: Activity,
    },
    {
      title: t("service.posture"),
      description: t("service.posture.desc"),
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            {t("services.title")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("services.subtitle")}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pathologies Section */}
        <div className="max-w-5xl mx-auto animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("pathologies.title")}
            </h3>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "cuff", "tendinitis", "strain", "sprain", "epicondylitis", "lowback",
              "sciatica", "knee_oa", "neck", "back", "shoulder", "joint",
              "dorsal", "hip_oa", "whiplash", "muscle_pain", "epitrochleitis",
              "movement", "instability", "pull", "tingling", "discopathy",
              "hernia", "fracture"
            ].map((key, index) => (
              <div
                key={index}
                className="p-3 bg-white rounded-lg border border-border/50 text-center text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default shadow-sm"
              >
                {t(`pathology.${key}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;