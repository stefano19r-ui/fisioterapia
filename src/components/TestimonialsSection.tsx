import { Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "M. Rossi",
      role: "Impiegato",
      content: "Dopo mesi di mal di schiena a causa del lavoro d'ufficio, Stefano mi ha aiutato a risolvere il problema con poche sedute e esercizi mirati. Consigliatissimo!",
      rating: 4,
    },
    {
      name: "Giulia B.",
      role: "Runner Amatoriale",
      content: "Ho avuto una tendinite fastidiosa che mi impediva di correre. Grazie a Stefano sono tornata ad allenarmi senza dolore. Competente e professionale.",
      rating: 5,
    },
    {
      name: "Roberto V.",
      role: "Pensionato",
      content: "La riabilitazione dopo l'intervento all'anca è stata dura, ma Stefano mi ha seguito con pazienza e competenza. Ora cammino meglio di prima!",
      rating: 5,
    },
  ];

  return (
    <section id="opiniones" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 border border-accent/20">
            Recensioni
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("testimonials.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border/50 shadow-sm relative group hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="h-10 w-10" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary/80 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;