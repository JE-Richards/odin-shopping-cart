import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  StyledMainContainer,
  StyledContent,
} from '../components/styles/containers.styled';
import {
  StyledStore,
  StyledProductList,
} from '../components/styles/StorePage.styled';
import { useAppContext } from '../context/AppContext';

function StorePage() {
  const { products, cart, error, isLoading, isDarkMode, setIsDarkMode } =
    useAppContext();
  return (
    <>
      <StyledMainContainer>
        <Header />
        <StyledContent>
          <StyledStore>
            <h1>All Products</h1>
            <StyledProductList>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                products.map((product) => <Card obj={product} />)
              )}
            </StyledProductList>
          </StyledStore>
        </StyledContent>
        <Footer />
      </StyledMainContainer>
    </>
  );
}

export default StorePage;
