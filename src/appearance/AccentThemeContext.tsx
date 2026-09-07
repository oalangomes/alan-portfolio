import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

export type AccentTheme = 'ember' | 'aurora';

interface AccentThemeContextValue {
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
  toggleAccentTheme: () => void;
}

const STORAGE_KEY = 'alan-portfolio-accent-theme';

const AccentThemeContext = createContext<AccentThemeContextValue | undefined>(undefined);

const getInitialAccentTheme = (): AccentTheme => {
  if (typeof window === 'undefined') {
    return 'ember';
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'aurora' ? 'aurora' : 'ember';
};

export function AccentThemeProvider({ children }: { children: ReactNode }) {
  const [accentTheme, setAccentTheme] = useState<AccentTheme>(getInitialAccentTheme);

  useLayoutEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, accentTheme);
    document.documentElement.dataset.accentTheme = accentTheme;
  }, [accentTheme]);

  const value = useMemo(
    () => ({
      accentTheme,
      setAccentTheme,
      toggleAccentTheme: () =>
        setAccentTheme((current) => (current === 'ember' ? 'aurora' : 'ember')),
    }),
    [accentTheme],
  );

  return (
    <AccentThemeContext.Provider value={value}>
      {children}
    </AccentThemeContext.Provider>
  );
}

export function useAccentTheme() {
  const context = useContext(AccentThemeContext);

  if (!context) {
    throw new Error('useAccentTheme must be used within an AccentThemeProvider');
  }

  return context;
}
