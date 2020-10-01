import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { props, addToCart } = this.props;
    const { title, price, id } = props;

    return (
      <div data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
        <Link to={ { pathname: `productDetails/${id}`, state: props } }>
          <div data-testid="product-detail-link">View Details</div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => { addToCart(props) } }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ProductCard;
