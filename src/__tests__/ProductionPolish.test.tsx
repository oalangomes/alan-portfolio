import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SkipToContent from '../components/SkipToContent';
import { LanguageProvider } from '../i18n/LanguageContext';
import NotFound from '../pages/NotFound';

afterEach(() => {
  window.localStorage.clear();
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
