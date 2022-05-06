import { findByText, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Displays list of pokemon', async () => {
    render(<App />);
    const loading = screen.getByText(/loading/i);
    const pikachu = await screen.findByText(/pikachu/i);
  });

  it('type', async () => {
    render(<App />);
    const searchbox = await screen.findByRole('textbox');
    expect(screen.queryByText(/butterfree/i)).toBeInTheDocument();
    userEvent.type(searchbox, 'pika');
    expect(searchbox).toHaveValue('pika');
    const pikachu = await screen.findByText(/pikachu/i);
    expect(screen.queryByText(/butterfree/i)).not.toBeInTheDocument();
  });
});
