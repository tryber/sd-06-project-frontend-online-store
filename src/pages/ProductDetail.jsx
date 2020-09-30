import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { products } = this.props.location.state;
    const { id } = this.props.match.params;
    const product = products.find((productItem) => id === productItem.id);
    return (
      <>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">cart</Link>
        <div data-testid="product-detail-name">
          <h2>{product.title}</h2>
          <span>
            R$
            {' '}
            {product.price}
          </span>
          <img src={ product.thumbnail } alt="imagem do produto" />
          <div>
            <p>especificações Tecnicas</p>
            <ul>
              <li>Cada especificação</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string,
  }) }).isRequired,
  location: PropTypes.shape({ state: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })) }) }).isRequired,
};

export default ProductDetail;
