import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import {
  StyledMainContainer,
  StyledContent,
  ContentWrapper,
} from '../components/styles/containers.styled';
import {
  StyledHero,
  StyledBestSellers,
  StyledProductList,
} from '../components/styles/HomePage.styled';
import { StyledButton } from '../components/styles/Button.styled';
import { useAppContext } from '../context/AppContext';

function HomePage() {
  const { products, cart, isLoading, isDarkMode, setiIsDarkMode } =
    useAppContext();

  const topProducts = [...products]
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 4);

  return (
    <>
      <StyledMainContainer>
        <Header />
        <StyledContent>
          <StyledHero>
            <h1>
              One of <span>THE</span> fakest shopping sites online.
            </h1>
            <p>
              Shopifake, for when you want to pretend you're buying something.
            </p>
          </StyledHero>
          <StyledBestSellers>
            <h1>Best Sellers</h1>
            <StyledProductList>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                topProducts.map((product) => (
                  <Card obj={product} key={product.id} />
                ))
              )}
            </StyledProductList>
            <StyledButton variant="primary">See more</StyledButton>
          </StyledBestSellers>
        </StyledContent>
        <Footer />
      </StyledMainContainer>
    </>
  );
}

export default HomePage;
