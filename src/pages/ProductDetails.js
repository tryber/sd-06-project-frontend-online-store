import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor() {
    super();

    this.addItemsToCart = this.addItemsToCart.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  addItemsToCart() {
    const { addItemCart } = this.props;
    const { location: { state: {
      title, thumbnail, price, id,
    } } } = this.props;
    const { quantity } = this.state;
    this.setState({
      quantity,
    });
    addItemCart({ product: { title, thumbnail, price, id, quantity } });
  }

  render() {
    const { location: { state: {
      title, thumbnail, price,
    } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `Imagem do produto ${title}` } />
        <h2>{price}</h2>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addItemsToCart }
        >
          Adicionar ao Carrinho
        </button>
        <div className="shopping-cart-div">
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/263/263142.svg"
              alt="Carrinho de compra"
              width="50"
            />
          </Link>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addItemCart: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ProductDetails;
