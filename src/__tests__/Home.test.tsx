import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Portfolio heading', () => {
  render(<Home />);
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
});
