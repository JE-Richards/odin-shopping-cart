import Header from '../Header';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withThemeProvider } from './mockTheme';
import { MemoryRouter } from 'react-router-dom';

describe('Testing Header component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        withThemeProvider(
        <Header />)
      </MemoryRouter>
    );

    const title = screen.getByText('Shopifake');
    const nav = screen.getByRole('navigation');
    const cartLink = screen.getByRole('link', { name: '' }); // no accessible name associted with the icon used for rendering

    expect(title).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('renders the cart icon', () => {
    render(
      <MemoryRouter>
        withThemeProvider(
        <Header />)
      </MemoryRouter>
    );

    const cartIcon = screen.getByTestId('cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });
});
