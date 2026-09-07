import { getProjects } from '../data/projects';

test('orders selected work intentionally and includes project-specific architecture metadata', () => {
  const projects = getProjects('en');

  expect(projects.map((project) => project.name)).toEqual([
    'runnerctl',
    'AgentsOrchNext',
    'Sports Intelligence Lab',
    'EA FC MANAGER MODE HUB',
    'NeuroTrack',
    'Caverna BJJ',
  ]);

  expect(projects.map((project) => project.visual.kind)).toEqual([
    'control-plane',
    'governed-context',
    'predictive-system',
    'data-pipeline',
    'product-ecosystem',
    'offline-loop',
  ]);

  expect(projects.every((project) => project.visual.nodes.length >= 4)).toBe(true);
});

test('localizes conceptual project diagrams without changing their structure', () => {
  const english = getProjects('en');
  const portuguese = getProjects('pt-BR');

  expect(english[0].visual.kind).toBe(portuguese[0].visual.kind);
  expect(english[0].visual.nodes[1]).toBe('Control');
  expect(portuguese[0].visual.nodes[1]).toBe('Controle');

  const sportsEn = english.find((project) => project.name === 'Sports Intelligence Lab');
  const sportsPt = portuguese.find((project) => project.name === 'Sports Intelligence Lab');

  expect(sportsEn?.visual.kind).toBe('predictive-system');
  expect(sportsEn?.visual.nodes).toEqual([
    'Sports data',
    'Features',
    'Model',
    'Evaluation',
    'Insights',
  ]);
  expect(sportsPt?.visual.nodes[0]).toBe('Dados esportivos');
  expect(sportsPt?.visual.nodes[3]).toBe('Avaliação');
});
