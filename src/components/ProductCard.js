import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    const { title, thumbnail, price } = product;
    return (
      <Link to={`/ProductDetails/${product.id}`} >
        <section key={ title } data-testid="product" className="product-content">
          <div className="img-div">
            <img className="img" src={ thumbnail } alt={ title } />
          </div>
          <div className="product-details-div">
            <p>{ title }</p>
            <p className="price">{`R$ ${price}`}</p>
          </div>
        </section>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default ProductCard;
