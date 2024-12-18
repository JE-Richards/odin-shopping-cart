import { StyledHeader } from './styles/Header.styled';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Nav from './Nav';

function Header() {
  return (
    <StyledHeader>
      <h1>Shopifake</h1>
      <Nav />
      <Link to="/cart" aria-label="Go to cart">
        <IconContext.Provider value={{ color: '#00ADB5' }}>
          <AiOutlineShoppingCart data-testid="cart-icon" />
        </IconContext.Provider>
      </Link>
    </StyledHeader>
  );
}

export default Header;
