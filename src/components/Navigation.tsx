import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t("nav.home"), href: "#inicio" },
    { name: t("nav.services"), href: "#servicios" },
    { name: t("nav.about"), href: "#sobre-mi" },
    { name: t("nav.prices"), href: "#prezzi" },
    { name: t("nav.booking"), href: "#contacto" },
    { name: t("nav.reviews"), href: "#opiniones" },
    { name: t("nav.contact"), href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-foreground/90"}`}>
              Stefano Ricci
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
              title={language === 'it' ? "Switch to English" : "Passa all'italiano"}
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase text-xs">{language}</span>
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("#contacto")}
              className="flex items-center gap-2 bg-primary hover:bg-primary-soft text-white shadow-lg shadow-primary/20"
            >
              <Phone className="h-4 w-4" />
              {t("nav.book")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Globe className="h-5 w-5" />
              <span className="uppercase text-xs">{language}</span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary hover:bg-secondary/50 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection("#contacto")}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-soft text-white"
                >
                  <Phone className="h-4 w-4" />
                  {t("nav.book")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;