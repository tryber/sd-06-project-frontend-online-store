import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';


class Card extends React.Component {
  render() {
    const { product } = this.props;
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/${id}`, state: { product } } }
        >
          <img
            data-testid="product-detail-link"
            src={ thumbnail }
            alt="fotografia do produto"
          />
        </Link>
        <span>{`R$ ${price}`}</span>
        <AddToCartButton product={ product } />
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
