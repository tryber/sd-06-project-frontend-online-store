import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ShoppingCartButton } from '../components';
import FromDetails from '../components/FormDetails';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addProductToCart = this.addProductToCart.bind(this);

    this.state = { product: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({ product: result }));
  }

  addProductToCart({ id, title, thumbnail, price }, amount = 1) {
    const newProduct = { id, title, thumbnail, price, amount };
    if (localStorage.cart) {
      const shoppingCart = JSON.parse(localStorage.cart);

      if (shoppingCart.some((el) => el.id === id)) {
        const updatedCart = shoppingCart.reduce((acc, el) => {
          if (el.id === id) {
            el.amount += 1;
          }
          return [...acc];
        }, shoppingCart);

        localStorage.cart = JSON.stringify(updatedCart);
      } else {
        shoppingCart.push(newProduct);
        localStorage.cart = JSON.stringify(shoppingCart);
      }
    } else {
      localStorage.cart = JSON.stringify([newProduct]);
    }
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <div>
          <Link to="/">Back</Link>
        </div>
        <ShoppingCartButton />
        <div>
          <h2 data-testid="product-detail-name">{`Produto: ${title}`}</h2>
          <img alt={ title } src={ thumbnail } />
          <p>{`Preço: R$ ${price}`}</p>
          <button
            onClick={ () => { this.addProductToCart(product); } }
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Add to cart
          </button>
        </div>
        <FromDetails />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
