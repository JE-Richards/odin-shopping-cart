import { StyledNav } from './styles/Nav.styled';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="store">Store</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
