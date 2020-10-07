import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductEvaluation from '../components/ProductEvaluation';

class ProductDetails extends Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
    this.state = {};
  }

  addToCart(iten) {
    const { title, thumbnail, price, id } = iten;
    const { addItem } = this.props;
    addItem({ title, thumbnail, price, id, quantity: 1 });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, thumbnail, price } = product;
    console.log(location.state);
    return (
      <div>
        <h2 data-testid="product-detail-name">{ `${title} - ${price}$` }</h2>
        <img src={ thumbnail } alt="product" />
        <h3>Especificações Técnicas</h3>
        <ul>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <ProductEvaluation />
        </ul>
        <button
          type="button"
          onClick={ () => this.addToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProductDetails;
