import Footer from '../Footer';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withThemeProvider } from './mockTheme';

describe('Testing Footer component', () => {
  it('renders correctly', () => {
    render(withThemeProvider(<Footer />));

    const disclaimer = screen.getByText('Not a real store.');
    const credits = screen.getByText(/Created by/);
    const link = screen.getByRole('link', { name: 'JE Richards' });

    expect(disclaimer).toBeInTheDocument();
    expect(credits).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/JE-Richards');
  });
});
