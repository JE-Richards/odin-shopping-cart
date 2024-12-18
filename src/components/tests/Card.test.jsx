import Card from '../Card';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withThemeProvider } from './mockTheme';

describe('Testing the Card component', () => {
  it('correctly renders', () => {
    const testData = {
      image: 'placeholder',
      price: 1000,
      title: 'T-shirt',
    };

    render(withThemeProvider(<Card obj={testData} />));

    const title = screen.getByText(testData.title);
    const price = screen.getByText(`$${testData.price}`);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', testData.image);
    expect(img).toHaveAttribute('alt', `${testData.title} image.`);
  });

  it('logs a PropTypes warning for invalid props', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      withThemeProvider(<Card obj={{ image: 123, price: 'abc', title: 456 }} />)
    );

    expect(consoleErrorSpy).toHaveBeenCalled();

    // Test the warnings are for prop types
    const calls = consoleErrorSpy.mock.calls.flat();
    const warning = calls.join(' ');
    expect(warning).toContain(
      'Invalid prop `obj.image` of type `number` supplied to `Card`, expected `string`.'
    );
    // Note: subsequent prop type warnings get surpressed to avoid cluttering the console, so only testing that the first has executed. This is sufficient for this project.

    consoleErrorSpy.mockRestore();
  });
});
