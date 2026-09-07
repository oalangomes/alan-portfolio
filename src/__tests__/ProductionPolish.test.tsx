import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import ErrorBoundary from '../components/ErrorBoundary';
import SkipToContent from '../components/SkipToContent';
import { LanguageProvider } from '../i18n/LanguageContext';
import NotFound from '../pages/NotFound';
import theme from '../theme';

afterEach(() => {
  window.localStorage.clear();
  vi.restoreAllMocks();
});

test('skip control focuses main content without changing the route hash', () => {
  window.localStorage.setItem('alan-portfolio-language', 'en');
  window.location.hash = '#/Projects';

  render(
    <LanguageProvider>
      <SkipToContent />
      <main id="main-content" tabIndex={-1}>
        Main content
      </main>
    </LanguageProvider>,
  );

  fireEvent.click(screen.getByRole('button', { name: 'Skip to content' }));

  expect(document.activeElement).toBe(document.getElementById('main-content'));
  expect(window.location.hash).toBe('#/Projects');
});

test('renders the global not found page in the active language', () => {
  window.localStorage.setItem('alan-portfolio-language', 'pt-BR');

  render(
    <LanguageProvider>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </LanguageProvider>,
  );

  expect(
    screen.getByRole('heading', { name: 'Essa página não existe.' }),
  ).toBeInTheDocument();
});

test('renders a recovery UI when a child crashes', () => {
  vi.spyOn(console, 'error').mockImplementation(() => undefined);

  const Broken = () => {
    throw new Error('boom');
  };

  render(
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Broken />
      </ErrorBoundary>
    </ChakraProvider>,
  );

  expect(
    screen.getByRole('heading', { name: 'Something went wrong.' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Reload / Recarregar' }),
  ).toBeInTheDocument();
});
