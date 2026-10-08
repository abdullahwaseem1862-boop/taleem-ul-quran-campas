import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LanguageConfig } from '../types';
import { LANGUAGES, TRANSLATIONS, Translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  config: LanguageConfig;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('tqc_language') as Language;
      if (saved && LANGUAGES[saved]) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const config = LANGUAGES[language] || LANGUAGES.en;
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const dir = config.dir;
  const isRTL = dir === 'rtl';

  const setLanguage = (newLang: Language) => {
    if (LANGUAGES[newLang]) {
      setLanguageState(newLang);
      try {
        localStorage.setItem('tqc_language', newLang);
      } catch {
        // ignore
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [dir, language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dir,
        isRTL,
        config,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
