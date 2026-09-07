import { fireEvent, render, screen } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';

function LanguageProbe() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <span>{language}</span>
      <button onClick={toggleLanguage}>toggle</button>
    </>
  );
}

afterEach(() => {
  window.localStorage.clear();
});

test('defaults to English when there is no saved preference', () => {
  render(
    <LanguageProvider>
      <LanguageProbe />
    </LanguageProvider>,
  );

  expect(screen.getByText('en')).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
});

test('toggles and persists the selected language', () => {
  window.localStorage.setItem('alan-portfolio-language', 'en');

  render(
    <LanguageProvider>
      <LanguageProbe />
    </LanguageProvider>,
  );

  expect(screen.getByText('en')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'toggle' }));

  expect(screen.getByText('pt-BR')).toBeInTheDocument();
  expect(window.localStorage.getItem('alan-portfolio-language')).toBe('pt-BR');
  expect(document.documentElement.lang).toBe('pt-BR');
});
