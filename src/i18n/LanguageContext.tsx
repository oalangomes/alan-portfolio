import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type Language = 'en' | 'pt-BR';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const STORAGE_KEY = 'alan-portfolio-language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'pt-BR') {
    return saved;
  }

  return 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;

    const title =
      language === 'pt-BR'
        ? 'Alan Gomes — Arquiteto de Software'
        : 'Alan Gomes — Software Architect';
    document.title = title;

    const descriptionText =
      language === 'pt-BR'
        ? 'Alan Gomes — Arquitetura de Software, Engenharia de IA, Developer Tooling e Engenharia de Produto.'
        : 'Alan Gomes — Software Architecture, AI Engineering, Developer Tooling and Product Engineering.';

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    const ogLocale = document.querySelector<HTMLMetaElement>(
      'meta[property="og:locale"]',
    );

    if (description) {
      description.content = descriptionText;
    }
    if (ogTitle) {
      ogTitle.content = title;
    }
    if (ogDescription) {
      ogDescription.content = descriptionText;
    }
    if (ogLocale) {
      ogLocale.content = language === 'pt-BR' ? 'pt_BR' : 'en_US';
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((current) => (current === 'en' ? 'pt-BR' : 'en')),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
