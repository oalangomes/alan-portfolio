import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import AccentThemeSwitcher from '../components/globals/AccentThemeSwitcher';
import {
  AccentThemeProvider,
  useAccentTheme,
} from '../appearance/AccentThemeContext';
import { LanguageProvider } from '../i18n/LanguageContext';
import theme from '../theme';

afterEach(() => {
  window.localStorage.clear();
  delete document.documentElement.dataset.accentTheme;
});

function CurrentTheme() {
  const { accentTheme } = useAccentTheme();
  return <span>{accentTheme}</span>;
}

test('uses Ember by default and persists Aurora after switching', () => {
  render(
    <ChakraProvider theme={theme}>
      <AccentThemeProvider>
        <LanguageProvider>
          <CurrentTheme />
          <AccentThemeSwitcher />
        </LanguageProvider>
      </AccentThemeProvider>
    </ChakraProvider>,
  );

  expect(screen.getByText('ember')).toBeInTheDocument();
  expect(document.documentElement.dataset.accentTheme).toBe('ember');

  fireEvent.click(screen.getByRole('button', { name: 'Color theme' }));
  fireEvent.click(screen.getByText('Aurora'));

  expect(screen.getByText('aurora')).toBeInTheDocument();
  expect(document.documentElement.dataset.accentTheme).toBe('aurora');
  expect(window.localStorage.getItem('alan-portfolio-accent-theme')).toBe('aurora');
});

test('restores a saved Aurora preference', () => {
  window.localStorage.setItem('alan-portfolio-accent-theme', 'aurora');

  render(
    <AccentThemeProvider>
      <CurrentTheme />
    </AccentThemeProvider>,
  );

  expect(screen.getByText('aurora')).toBeInTheDocument();
  expect(document.documentElement.dataset.accentTheme).toBe('aurora');
});
