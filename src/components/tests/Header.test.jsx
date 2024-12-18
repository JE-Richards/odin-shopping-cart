import Header from '../Header';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withThemeProvider } from './mockTheme';
import { MemoryRouter } from 'react-router-dom';

describe('Testing Header component', () => {
  it('renders correctly', () => {
    render(
      withThemeProvider(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
    );

    const title = screen.getByText('Shopifake');
    const nav = screen.getByRole('navigation');
    const cartLink = screen.getByRole('link', { name: 'Go to cart' }); // aria-label

    expect(title).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('renders the cart icon', () => {
    render(
      withThemeProvider(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
    );

    const cartIcon = screen.getByTestId('cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });
});
