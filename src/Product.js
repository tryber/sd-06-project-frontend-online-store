import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { title, price, image } = this.props;
    return (
      <div data-testid="product" className="div-product">
        <img src={ image } alt="Product" />
        <h5>{ title }</h5>
        <p>{ `R$: ${price}` }</p>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
