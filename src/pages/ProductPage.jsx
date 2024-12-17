import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductQuantity from '../components/ProductQuantity';
import { StyledButton } from '../components/styles/Button.styled';
import { StyledProductPage } from '../components/styles/ProductPage.styled';
import {
  StyledMainContainer,
  StyledContent,
} from '../components/styles/containers.styled';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

function ProductPage() {
  const { products, cart, error, isLoading, isDarkMode, setIsDarkMode } =
    useAppContext();
  const { productId } = useParams();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function starRating(rating) {
    function roundHalf(num) {
      return Math.round(num * 2) / 2;
    }

    const roundedRating = roundHalf(rating);

    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(roundedRating);

    return (
      <div>
        <IconContext.Provider value={{ color: '#00ADB5' }}>
          {/* Render full stars -> create array of empty values, then for each empty value map to a star */}
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={`full-star-${index}`} />
          ))}

          {/* Render half star if needed */}
          {hasHalfStar && <FaRegStarHalfStroke />}

          {/* Render empty stars */}
          {[...Array(emptyStars)].map((_, index) => (
            <FaRegStar key={`empty-star-${index}`} />
          ))}
        </IconContext.Provider>
      </div>
    );
  }

  const product = products.find((item) => item.id === parseInt(productId, 10));

  return (
    <>
      <StyledMainContainer>
        <Header />
        <StyledContent>
          <StyledProductPage>
            {!product ? (
              <p>Loading...</p>
            ) : (
              <>
                <h1>{product.title}</h1>
                <img src={product.image} alt={`${product.title} image.`} />
                <div>
                  <h2>Product description:</h2>
                  <p>{product.description}</p>
                  <div>
                    {starRating(product.rating.rate)}
                    <p>{product.rating.count} reviews.</p>
                  </div>
                  <p>
                    <span>${product.price}</span>
                  </p>
                </div>
                <div>
                  <ProductQuantity
                    initialQuantity={1}
                    maxQuantity={99}
                    onChange={setSelectedQuantity}
                  />
                  <StyledButton variant="primary">Add to cart</StyledButton>
                </div>
              </>
            )}
          </StyledProductPage>
        </StyledContent>
        <Footer />
      </StyledMainContainer>
    </>
  );
}

export default ProductPage;