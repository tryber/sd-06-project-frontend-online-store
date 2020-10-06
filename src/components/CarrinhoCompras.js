import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarrinhoCompras extends Component {
  constructor() {
    super();
    this.setShoppingCart = this.setShoppingCart.bind(this);
    // this.increaseProduct = this.increaseProduct.bind(this);
  }

  componentDidUpdate(prevPros) {
    console.log('componentDidUpdate', this.props, prevPros);
  }

  setShoppingCart(productCart) {
    const { increaseProduct } = this.props;
    const arrayEmpty = 0;
    if (productCart.length > arrayEmpty) {
      return productCart.map((product) => (
        <div style={ { background: 'yellow' } } key={ product.id }>
          <h3
            style={ { color: 'red' } }
            data-testid="shopping-cart-product-name"
          >
            {product.name}
          </h3>
          <img
            src={ product.thumbnail }
            alt="imagem produto"
          />
          <h2
            style={ { color: 'blue' } }
          >
            { product.price }
          </h2>
          <h2
            data-testid="shopping-cart-product-quantity"
            style={ { color: 'black' } }
          >
            { product.countTotal }
          </h2>
          <div>
            <button
              type="button"
              value={ product.countTotal }
              onClick={ () => increaseProduct(product.id) }
              data-testid="product-increase-quantity"
            >
              Aumenta
            </button>
          </div>
          <div>
            <button
              type="button"
              data-testid="product-decrease-quantity"
            >
              Diminui
            </button>
          </div>
        </div>
      ));
    }
    return (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>
    );
  }


  render() {
    const { productCart } = this.props;
    return (
      <div>
        {this.setShoppingCart(productCart)}
      </div>
    );
  }
}

CarrinhoCompras.propTypes = {
  productCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseProduct: PropTypes.func.isRequired,
};

export default CarrinhoCompras;
