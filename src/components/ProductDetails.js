import PropTypes from 'prop-types';
import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { items } = state;
    const { title, price, thumbnail } = items;
    return (
      <div data-testid="shopping-cart-button">
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">Quantidade:</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
