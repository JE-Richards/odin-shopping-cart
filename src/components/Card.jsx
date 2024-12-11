import PropTypes from 'prop-types';
import { StyledCard } from './styles/Card.styled';

function Card({ obj: { image, price, title } }) {
  return (
    <StyledCard>
      <img src={image} alt={`${title} image.`} />
      <div>
        <h1>{title}</h1>
        <h2>{`$${price}`}</h2>
      </div>
    </StyledCard>
  );
}

Card.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
