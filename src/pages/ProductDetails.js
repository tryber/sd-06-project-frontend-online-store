import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

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
      <section className="product-details-container">
        <div className="top-content">
          <div className="product-details-img-div">
            <img src={ thumbnail } alt={ `Imagem do produto ${title}` } />
          </div>
          <div data-testid="product-detail-name" className="product-details-content">
            <div className="product-name">
              <h1>{ title }</h1>
            </div>
            <div className="price-container">
              <div className="product-price">
                <h2>{`R$ ${price}`}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-buttons">
          <div className="backarrow-div">
            <Link to="/">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/0/340.svg"
                alt="back-arrow"
                width="50"
                className="back-arrow"
              />
            </Link>
          </div>
          <div className="add-button-div">
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addItemsToCart }
              className="details-add-button"
            >
              Adicionar ao Carrinho
            </button>
          </div>
          <div className="details-shopping-cart-div">
            <Link data-testid="shopping-cart-button" to="/ShoppingCart">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/263/263142.svg"
                alt="Carrinho de compra"
                width="50"
              />
            </Link>
          </div>
        </div>
      </section>
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
