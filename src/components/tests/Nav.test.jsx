import Nav from '../Nav';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withThemeProvider } from './mockTheme';
import { MemoryRouter } from 'react-router-dom';

describe('Testing Nav component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        withThemeProvider(
        <Nav />)
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const storeLink = screen.getByText('Store');

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(storeLink).toBeInTheDocument();
    expect(storeLink).toHaveAttribute('href', '/store');
  });
});
