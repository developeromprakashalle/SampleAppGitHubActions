import { test , expect} from 'vitest';
import App from './App';
import {render, screen } from '@testing-library/react';


test('renders Application test', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, Vite!/i);
  expect(textElement).toBeInTheDocument();
});
