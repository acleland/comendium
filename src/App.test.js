import { findByText, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Displays list of pokemon', async () => {
    render(<App />);
    const loading = screen.getByText(/loading/i);
    const pikachu = await screen.findByText(/pikachu/i);
  });
});
