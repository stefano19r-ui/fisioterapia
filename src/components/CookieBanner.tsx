import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieBannerAccepted");
    const rejected = localStorage.getItem("cookieBannerRejected");
    if (!accepted && !rejected) {
      setIsVisible(true);
      // Optional: Prevent scrolling while banner is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieBannerAccepted", "true");
    setIsVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleReject = () => {
    localStorage.setItem("cookieBannerRejected", "true");
    setIsVisible(false);
    document.body.style.overflow = 'auto';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[99999] flex items-end sm:items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-zinc-950 w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-500">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🍪</span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Informativa sui Cookie
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Per offrirti la migliore esperienza, utilizziamo cookie tecnici essenziali che garantiscono il corretto funzionamento del sito. Puoi accettarli tutti o rifiutarli, modificando la tua esperienza.
          </p>
          <div className="pt-2 text-sm text-zinc-500">
            Leggi la nostra <Link to="/privacy" onClick={() => document.body.style.overflow = 'auto'} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Privacy e Cookie Policy</Link> per maggiori dettagli.
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-end border-t border-zinc-100 dark:border-zinc-800">
            <Button variant="outline" className="w-full sm:w-auto" onClick={handleReject}>
              Rifiuta
            </Button>
            <Button className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 font-medium px-8" onClick={handleAccept}>
              Accetta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
