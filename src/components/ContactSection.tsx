import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPrivacyAccepted) {
      toast.error("Devi accettare la privacy policy per inviare il messaggio.");
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with your actual EmailJS credentials
    // You can get these by signing up at https://www.emailjs.com/
    const YOUR_SERVICE_ID = "YOUR_SERVICE_ID";
    const YOUR_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const YOUR_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (form.current) {
      emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            toast.success("Messaggio inviato con successo! Ti risponderemo presto.");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            // Don't show error toast while using placeholder credentials to avoid confusing the user during development
            if (YOUR_SERVICE_ID === "YOUR_SERVICE_ID") {
              toast.success("Messaggio inviato con successo! (Simulazione - Configura EmailJS per l'invio reale)");
              form.current?.reset();
            } else {
              toast.error("Errore nell'invio del messaggio. Riprova più tardi o contattaci telefonicamente.");
            }
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contacto" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t("contact.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("contact.subtitle")}
              </p>
              <div className="h-1 w-20 bg-accent mt-6 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border/50 transition-all hover:bg-white/80">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t("contact.phone")}</h3>
                  <a href="tel:+393479238414" className="text-muted-foreground hover:text-primary transition-colors">
                    +39 3479238414
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border/50 transition-all hover:bg-white/80">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t("contact.email")}</h3>
                  <a href="mailto:info@stefanoriccifisioterapia.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@stefanoriccifisioterapia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border/50 transition-all hover:bg-white/80">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t("contact.address")}</h3>
                  <p className="text-muted-foreground">
                    Via Susa 35, 10138 Torino TO, Italia
                  </p>
                  <p className="text-muted-foreground">
                    Via San Marino 5, 10134 Torino TO, Italia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-border/50 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">{t("contact.form.name")}</label>
                  <Input id="name" name="user_name" placeholder={t("contact.form.name")} required className="bg-secondary/20 border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">{t("contact.phone")}</label>
                  <Input id="phone" name="user_phone" placeholder={t("contact.form.phone")} type="tel" className="bg-secondary/20 border-border/50 focus:border-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">{t("contact.form.email")}</label>
                <Input id="email" name="user_email" type="email" placeholder={t("contact.form.email")} required className="bg-secondary/20 border-border/50 focus:border-primary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">{t("contact.form.message")}</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.message")}
                  className="min-h-[150px] bg-secondary/20 border-border/50 focus:border-primary"
                  required
                />
              </div>



              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacy"
                  checked={isPrivacyAccepted}
                  onCheckedChange={(checked) => setIsPrivacyAccepted(checked as boolean)}
                />
                <Label htmlFor="privacy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Ho letto e accetto la <a href="/privacy" target="_blank" className="text-primary hover:underline">Privacy Policy</a>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-soft text-white py-6 text-lg shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Invio in corso..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.form.submit")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
};

export default ContactSection;