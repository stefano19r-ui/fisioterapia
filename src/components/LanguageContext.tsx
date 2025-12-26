import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface Translations {
  [key: string]: {
    it: string;
    en: string;
  };
}

// Global translations dictionary
export const translations: Translations = {
  // Navigation
  "nav.home": { it: "Home", en: "Home" },
  "nav.services": { it: "Servizi", en: "Services" },
  "nav.reviews": { it: "Recensioni", en: "Reviews" },
  "nav.about": { it: "Chi sono", en: "About" },
  "nav.prices": { it: "Prezzi", en: "Prices" },
  "nav.booking": { it: "Prenota", en: "Book" },
  "nav.contact": { it: "Contatti", en: "Contact" },
  "nav.book": { it: "Prenota ora", en: "Book now" },

  // Hero
  "hero.title": { it: "Fisioterapia e Riabilitazione a Torino", en: "Physiotherapy and Rehabilitation in Turin" },
  "hero.subtitle": { it: "Recupera il tuo benessere con trattamenti personalizzati e terapia manuale avanzata.", en: "Recover your well-being with personalized treatments and advanced manual therapy." },
  "hero.cta": { it: "Prenota una visita", en: "Book a visit" },

  // Services
  "services.title": { it: "I miei servizi", en: "My Services" },
  "services.subtitle": { it: "Trattamenti personalizzati per il tuo recupero", en: "Personalized treatments for your recovery" },
  "service.manual": { it: "Terapia Manuale", en: "Manual Therapy" },
  "service.manual.desc": { it: "Tecniche specializzate per ridurre il dolore e migliorare la mobilità.", en: "Specialized techniques to reduce pain and improve mobility." },
  "service.rehab": { it: "Riabilitazione", en: "Rehabilitation" },
  "service.rehab.desc": { it: "Recupero funzionale post-operatorio e post-traumatico.", en: "Post-operative and post-traumatic functional recovery." },
  "service.sport": { it: "Fisioterapia Sportiva", en: "Sports Physiotherapy" },
  "service.sport.desc": { it: "Prevenzione e cura degli infortuni per atleti e sportivi.", en: "Injury prevention and care for athletes." },
  "service.posture": { it: "Rieducazione Posturale", en: "Postural Re-education" },
  "service.posture.desc": { it: "Correzione di squilibri posturali per prevenire dolori cronici.", en: "Correction of postural imbalances to prevent chronic pain." },

  // Prices
  "prices.title": { it: "Prestazioni e Prezzi", en: "Services and Prices" },
  "prices.physio": { it: "Fisioterapia / Prima Visita", en: "Physiotherapy / First Visit" },
  "prices.home": { it: "Visita a domicilio", en: "Home Visit" },

  // Pathologies
  "pathologies.title": { it: "Patologie Trattate", en: "Treated Conditions" },
  "pathology.cuff": { it: "Rottura della cuffia dei rotatori", en: "Rotator cuff tear" },
  "pathology.tendinitis": { it: "Tendinite", en: "Tendinitis" },
  "pathology.strain": { it: "Strappo muscolare", en: "Muscle strain" },
  "pathology.sprain": { it: "Distorsione", en: "Sprain" },
  "pathology.epicondylitis": { it: "Epicondilite", en: "Epicondylitis" },
  "pathology.lowback": { it: "Lombalgia", en: "Low back pain" },
  "pathology.sciatica": { it: "Sciatica", en: "Sciatica" },
  "pathology.knee_oa": { it: "Gonartrosi (artrosi del ginocchio)", en: "Knee osteoarthritis" },
  "pathology.neck": { it: "Cervicalgia", en: "Neck pain" },
  "pathology.back": { it: "Mal di schiena", en: "Back pain" },
  "pathology.shoulder": { it: "Dolore alla spalla", en: "Shoulder pain" },
  "pathology.joint": { it: "Dolore articolare", en: "Joint pain" },
  "pathology.dorsal": { it: "Dorsalgia", en: "Upper back pain" },
  "pathology.hip_oa": { it: "Coxartrosi (artrosi dell'anca)", en: "Hip osteoarthritis" },
  "pathology.whiplash": { it: "Colpo di Frusta", en: "Whiplash" },
  "pathology.muscle_pain": { it: "Dolori muscolari", en: "Muscle pain" },
  "pathology.epitrochleitis": { it: "Epitrocleite", en: "Epitrochleitis" },
  "pathology.movement": { it: "Disturbi del movimento", en: "Movement disorders" },
  "pathology.instability": { it: "Instabilità di spalla", en: "Shoulder instability" },
  "pathology.pull": { it: "Stiramento", en: "Muscle pull" },
  "pathology.tingling": { it: "Formicolio", en: "Tingling" },
  "pathology.discopathy": { it: "Discopatia", en: "Discopathy" },
  "pathology.hernia": { it: "Ernia del disco", en: "Herniated disc" },
  "pathology.fracture": { it: "Frattura", en: "Fracture" },

  // About
  "about.title": { it: "Chi sono", en: "About Me" },
  "about.bio1": {
    it: "Laureato in Fisioterapia nel 2016 presso l'Università di Torino. In questi anni ho seguito varie formazioni sulla terapia manuale, l'esercizio terapeutico e la forza in riabilitazione.",
    en: "Graduated in Physiotherapy in 2016 at the University of Turin. Over these years I have attended various training courses on manual therapy, therapeutic exercise, and strength in rehabilitation."
  },
  "about.bio2": {
    it: "Attualmente collaboro con la società Ginnastica Grugliasco e ho partecipato come fisioterapista per la Nazionale di Ginnastica Acrobatica alle ultime edizione dei Mondiali ed Europei.",
    en: "I currently collaborate with the Grugliasco Gymnastics Society and have participated as a physiotherapist for the National Acrobatic Gymnastics Team at the last World and European Championships."
  },
  "about.bio3": {
    it: "Tra i miei pazienti figurano spesso ginnasti, circensi e danzatori, richiedendo un approccio altamente specializzato nella gestione del movimento e della performance.",
    en: "My patients often include gymnasts, circus performers, and dancers, requiring a highly specialized approach to movement and performance management."
  },
  "about.check1": { it: "Fisioterapista Nazionale", en: "National Team Physio" },
  "about.check2": { it: "Specialista Sportivo", en: "Sports Specialist" },
  "about.check3": { it: "Terapia Manuale", en: "Manual Therapy" },

  // Booking
  "booking.title": { it: "Prenota una Sessione", en: "Book a Session" },
  "booking.subtitle": { it: "Scegli l'orario più comodo per te direttamente dal calendario.", en: "Choose the most convenient time for you directly from the calendar." },
  "booking.button": { it: "Vai al Calendario", en: "Go to Calendar" },

  // Testimonials
  "testimonials.title": { it: "Cosa Dicono i Pazienti", en: "What Patients Say" },

  // Contact
  "contact.title": { it: "Contattami", en: "Contact Me" },
  "contact.subtitle": { it: "Prenota la tua visita oggi stesso", en: "Book your visit today" },
  "contact.phone": { it: "Telefono", en: "Phone" },
  "contact.email": { it: "Email", en: "Email" },
  "contact.address": { it: "Indirizzo", en: "Address" },
  "contact.address.value": { it: "Via Roma 10, 10121 Torino TO, Italia", en: "Via Roma 10, 10121 Turin TO, Italy" },
  "contact.form.name": { it: "Nome", en: "Name" },
  "contact.form.email": { it: "Email", en: "Email" },
  "contact.form.message": { it: "Messaggio", en: "Message" },
  "contact.form.submit": { it: "Invia Messaggio", en: "Send Message" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
