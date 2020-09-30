import React from 'react';
import PropTypes from 'prop-types';

class ProductItem extends React.Component {
  render() {
    const { product, handleClick } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img alt="Product" src={ thumbnail } />
        <p>{price}</p>
        <button type="button" data-testid="product-add-to-cart" onClick={ handleClick }>Add to cart</button>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductItem;
