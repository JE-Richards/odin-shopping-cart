import { useAppContext } from '../context/AppContext';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductQuantity from '../components/ProductQuantity';
import { StyledButton } from '../components/styles/Button.styled';
import {
  StyledCartPage,
  StyledProductDetails,
} from '../components/styles/CartPage.styled';
import {
  StyledMainContainer,
  StyledContent,
} from '../components/styles/containers.styled';

function CartPage() {
  const { products, cart, setCart, isDarkMode, setIsDarkMode } =
    useAppContext();

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find((product) => product.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <>
      <StyledMainContainer>
        <Header />
        <StyledContent>
          <StyledCartPage>
            {cart.length === 0 ? (
              <div>Your cart is empty!</div>
            ) : (
              cart.map((item, index) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (!product) return null;

                const isLastItem = index === cart.length - 1;

                return (
                  <StyledProductDetails key={item.id} isLastItem={isLastItem}>
                    <img src={product.image} alt={`${product.title} image.`} />
                    <div>
                      <h1>{product.title}</h1>
                      <p>${product.price.toFixed(2)}</p>
                    </div>
                    <ProductQuantity
                      initialQuantity={item.quantity}
                      maxQuantity={99}
                      onChange={(newQuantity) => {
                        setCart((prevCart) =>
                          prevCart.map((cartItem) =>
                            cartItem.id === item.id
                              ? { ...cartItem, quantity: newQuantity }
                              : cartItem
                          )
                        );
                      }}
                    />
                    <div>${(item.quantity * product.price).toFixed(2)}</div>
                  </StyledProductDetails>
                );
              })
            )}
            {cart.length > 0 && (
              <div>
                <h2>
                  Total: <span>${cartTotal.toFixed(2)}</span>
                </h2>
                <StyledButton variant="primary">
                  Proceed to Checkout
                </StyledButton>
              </div>
            )}
          </StyledCartPage>
        </StyledContent>
        <Footer />
      </StyledMainContainer>
    </>
  );
}

export default CartPage;
