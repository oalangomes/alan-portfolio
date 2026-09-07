import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders the portfolio positioning', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', {
      name: /I design systems that make complex software easier to build, understand and evolve/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Software Architecture • AI Engineering/i)).toBeInTheDocument();
});
