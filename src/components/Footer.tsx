import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-white">
            <div className="bg-white/10 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Stefano Ricci
            </span>
          </div>

          {/* Info Section */}
          <div className="text-center md:text-right text-[10px] md:text-xs space-y-1 max-w-md">
            <p className="font-semibold text-white text-sm">Stefano Ricci</p>
            <p>Dottore in Fisioterapia</p>
            <p>P. IVA 05378940877</p>
            <p>Iscritto all' Ordine Interregionale Piemonte e Valle D'Aosta</p>
            <p>Ordine dei Fisioterapisti - n. tessera 1785</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px]">© {new Date().getFullYear()} Stefano Ricci. Tutti i diritti riservati.</p>
          <Link to="/privacy" className="text-[10px] hover:text-white transition-colors underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
