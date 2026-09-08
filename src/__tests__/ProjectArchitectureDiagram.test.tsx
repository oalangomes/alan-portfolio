import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import ProjectArchitectureDiagram from '../components/ProjectArchitectureDiagram';
import { getProjects } from '../data/projects';
import { LanguageProvider } from '../i18n/LanguageContext';
import theme from '../theme';

afterEach(() => {
  window.localStorage.clear();
});

function renderDiagram(language: 'en' | 'pt-BR') {
  window.localStorage.setItem('alan-portfolio-language', language);
  const visual = getProjects(language)[0].visual;

  return render(
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <ProjectArchitectureDiagram visual={visual} />
      </LanguageProvider>
    </ChakraProvider>,
  );
}

test('uses an explicit system-view label instead of pagination-like dots', () => {
  renderDiagram('en');

  expect(screen.getByText('system view')).toBeInTheDocument();
  expect(
    screen.getByRole('img', { name: /Conceptual control plane/i }),
  ).toBeInTheDocument();
});

test('localizes the system-view label in Brazilian Portuguese', () => {
  renderDiagram('pt-BR');

  expect(screen.getByText('visão do sistema')).toBeInTheDocument();
});
