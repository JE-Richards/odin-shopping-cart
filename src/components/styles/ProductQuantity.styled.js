import styled from 'styled-components';

export const QuantityContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  button {
    font-weight: 700;
    font-size: ${({ context }) => (context === 'cart' ? '1rem' : '1.2rem')};
    padding: ${({ context }) =>
      context === 'cart' ? '0.2rem 0.4rem' : '0.3rem 0.6rem'};
    background-color: ${({ theme }) => theme.productQuantity.background};
    border: none;
    border-radius: 8px;
    width: 2rem;
    height: 2rem;

    &:hover {
      background-color: ${({ theme }) => theme.productQuantity.backgroundHover};
    }

    &:disabled {
      background-color: ${({ theme }) =>
        theme.productQuantity.backgroundDisabled};
    }
  }

  span {
    font-size: ${({ context }) => (context === 'cart' ? '1rem' : '1.2rem')};
  }
`;
