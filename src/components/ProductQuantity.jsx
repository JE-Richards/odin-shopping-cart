import { useState } from 'react';
import { QuantityContainer } from './styles/ProductQuantity.styled';

function ProductQuantity({
  initialQuantity = 1,
  maxQuantity = 99,
  onChange, // callback to be provided by specific pages, e.g. cart
  context = 'product', // used for styling
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      if (onChange) onChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onChange) onChange(newQuantity);
    }
  };

  return (
    <QuantityContainer context={context}>
      <button onClick={handleDecrement} disabled={quantity <= 1}>
        -
      </button>
      <span data-testid="quantity">{quantity}</span>
      <button onClick={handleIncrement} disabled={quantity >= maxQuantity}>
        +
      </button>
    </QuantityContainer>
  );
}

export default ProductQuantity;
