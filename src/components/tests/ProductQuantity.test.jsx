import ProductQuantity from '../ProductQuantity';
import { useState } from 'react';
import { describe, it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withThemeProvider } from './mockTheme';
import userEvent from '@testing-library/user-event';

describe('Testing the ProductQuantity component', () => {
  it('renders correctly', () => {
    render(withThemeProvider(<ProductQuantity />));

    const quantitySpan = screen.getByTestId('quantity');
    const decrementButton = screen.getByRole('button', { name: '-' });
    const incrementButton = screen.getByRole('button', { name: '+' });

    expect(quantitySpan).toBeInTheDocument();
    expect(quantitySpan).toHaveTextContent('1');
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  it('correctly renders initial quantity', () => {
    render(withThemeProvider(<ProductQuantity initialQuantity={30} />));

    const quantitySpan = screen.getByTestId('quantity');

    expect(quantitySpan).toHaveTextContent('30');
  });

  describe('Testing button functionality', () => {
    test('Increment button increases the quantity when clicked', async () => {
      render(withThemeProvider(<ProductQuantity />));
      const user = userEvent.setup();

      const quantitySpan = screen.getByTestId('quantity');
      const incremenetButton = screen.getByRole('button', { name: '+' });

      expect(quantitySpan).toHaveTextContent('1');

      await user.click(incremenetButton);

      expect(quantitySpan).toHaveTextContent('2');
    });

    test('Decrement button decreases the quantity when clicked', async () => {
      render(withThemeProvider(<ProductQuantity initialQuantity={10} />));
      const user = userEvent.setup();

      const quantitySpan = screen.getByTestId('quantity');
      const decrementButton = screen.getByRole('button', { name: '-' });

      expect(quantitySpan).toHaveTextContent('10');

      await user.click(decrementButton);

      expect(quantitySpan).toHaveTextContent('9');
    });

    test('Increment button disables when the quantity reaches the maximum value', async () => {
      render(
        withThemeProvider(
          <ProductQuantity initialQuantity={9} maxQuantity={10} />
        )
      );
      const user = userEvent.setup();

      const quantitySpan = screen.getByTestId('quantity');
      const incremenetButton = screen.getByRole('button', { name: '+' });

      expect(incremenetButton).not.toBeDisabled();

      await user.click(incremenetButton);

      expect(quantitySpan).toHaveTextContent('10');
      expect(incremenetButton).toBeDisabled();
    });

    test('Decrement button disables when the quantity reaches 1', async () => {
      render(withThemeProvider(<ProductQuantity initialQuantity={2} />));
      const user = userEvent.setup();

      const quantitySpan = screen.getByTestId('quantity');
      const decrementButton = screen.getByRole('button', { name: '-' });

      expect(decrementButton).not.toBeDisabled();

      await user.click(decrementButton);

      expect(quantitySpan).toHaveTextContent('1');
      expect(decrementButton).toBeDisabled();
    });
  });

  test('onChange callback executes if provided to component', async () => {
    const MockParent = () => {
      const [quantity, setQuantity] = useState(7);

      return (
        <div>
          <span data-testid="parent-quantity">{quantity}</span>
          <ProductQuantity
            initialQuantity={quantity}
            onChange={setQuantity} // Pass the state setter as the callback
            maxQuantity={10}
          />
        </div>
      );
    };

    render(withThemeProvider(<MockParent />));
    const user = userEvent.setup();

    const pQuantity = screen.getByTestId('parent-quantity');
    const incremenetButton = screen.getByRole('button', { name: '+' });
    expect(pQuantity).toHaveTextContent('7');

    await user.click(incremenetButton);

    expect(pQuantity).toHaveTextContent('8');
  });
});
