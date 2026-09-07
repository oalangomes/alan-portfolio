import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../i18n/LanguageContext';
import Home from '../pages/Home';

const renderHome = (language: 'en' | 'pt-BR') => {
  window.localStorage.setItem('alan-portfolio-language', language);

  return render(
    <LanguageProvider>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </LanguageProvider>,
  );
};

afterEach(() => {
  window.localStorage.clear();
});

test('renders the portfolio positioning in English', () => {
  renderHome('en');

  expect(
    screen.getByRole('heading', {
      name: /I design systems that make complex software easier to build, understand and evolve/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Software Architecture • AI Engineering/i),
  ).toBeInTheDocument();
  expect(screen.getByText('Coding agents')).toBeInTheDocument();
  expect(screen.getByText('Retrieval benchmarks')).toBeInTheDocument();
  expect(
    screen.queryByRole('img', { name: /conceptual architecture map/i }),
  ).not.toBeInTheDocument();
});

test('renders the portfolio positioning in Brazilian Portuguese', () => {
  renderHome('pt-BR');

  expect(
    screen.getByRole('heading', {
      name: /Eu projeto sistemas que tornam software complexo mais fácil de construir, entender e evoluir/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Arquitetura de Software • Engenharia de IA/i),
  ).toBeInTheDocument();
  expect(screen.getByText('Agentes de código')).toBeInTheDocument();
  expect(screen.getByText('Benchmarks de retrieval')).toBeInTheDocument();
  expect(
    screen.queryByRole('img', { name: /mapa conceitual de arquitetura/i }),
  ).not.toBeInTheDocument();
});
