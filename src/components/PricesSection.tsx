import { useLanguage } from "@/components/LanguageContext";
import { Check } from "lucide-react";

const PricesSection = () => {
    const { t } = useLanguage();

    const prices = [
        {
            title: t("prices.physio"),
            price: "70 €",
            description: "45-60 min"
        },
        {
            title: t("prices.home"),
            price: "85 €",
            description: "Torino"
        }
    ];

    return (
        <section id="prezzi" className="py-20 bg-secondary/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        {t("prices.title")}
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
                    {prices.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group w-64 text-center flex flex-col items-center justify-center min-h-[160px]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors px-2">
                                {item.title}
                            </h3>

                            <div className="text-3xl font-bold text-primary mb-2">
                                {item.price}
                            </div>

                            <p className="text-muted-foreground text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricesSection;
