import { getProjects } from '../data/projects';

test('orders selected work intentionally and includes visual metadata', () => {
  const projects = getProjects('en');

  expect(projects.map((project) => project.name)).toEqual([
    'runnerctl',
    'AgentsOrchNext',
    'EA FC MANAGER MODE HUB',
    'NeuroTrack',
    'Caverna BJJ',
  ]);

  expect(projects.every((project) => project.visual.label.length > 0)).toBe(true);
});
