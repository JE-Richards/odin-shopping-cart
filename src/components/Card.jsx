import PropTypes from 'prop-types';
import { StyledCard } from './styles/Card.styled';
import { CardImgContainer } from './styles/containers.styled';
import { Link } from 'react-router-dom';

function Card({ obj: { id, image, price, title } }) {
  return (
    <Link to={`/store/${id}`}>
      <StyledCard>
        <CardImgContainer>
          <img src={image} alt={`${title} image.`} />
        </CardImgContainer>
        <div>
          <h1>{title}</h1>
          <h2>{`$${price}`}</h2>
        </div>
      </StyledCard>
    </Link>
  );
}

Card.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
