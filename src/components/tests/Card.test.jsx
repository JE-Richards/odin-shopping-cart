import Card from '../Card';
import { ThemeProvider } from 'styled-components';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

const mockTheme = {
  colors: {
    surface: '#ffffff',
    textPrimary: '#000000',
    primary: '#00adb5',
  },
  shadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

describe('Testing the Card component', () => {
  it('correctly renders', () => {
    const testData = {
      image: 'placeholder',
      price: 1000,
      title: 'T-shirt',
    };

    render(
      <ThemeProvider theme={mockTheme}>
        <Card obj={testData} />
      </ThemeProvider>
    );

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
      <ThemeProvider theme={mockTheme}>
        <Card obj={{ image: 123, price: 'abc', title: 456 }} />
      </ThemeProvider>
    );

    expect(consoleErrorSpy).toHaveBeenCalled();

    // Test the warnings are for prop types
    const calls = consoleErrorSpy.mock.calls.flat();
    const warning = calls.join(' ');
    expect(warning).toContain(
      'Invalid prop `obj.image` of type `number` supplied to `Card`, expected `string`.'
    );
    // Note: subsequent prop type warnings get surpressed to avoid cluttering the console, so only testing that the first has executes. This is sufficient for this project.

    consoleErrorSpy.mockRestore();
  });

  it('matches the snapshot', () => {
    const testData = {
      image: 'placeholder',
      price: 1000,
      title: 'T-shirt',
    };

    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <Card obj={testData} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
