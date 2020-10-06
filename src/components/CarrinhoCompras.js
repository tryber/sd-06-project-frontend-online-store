import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarrinhoCompras extends Component {
  constructor() {
    super();
    this.setShoppingCart = this.setShoppingCart.bind(this);
    this.setStateShoppingCart = this.setStateShoppingCart.bind(this);
    this.state = {
      productCartState: '',
    };
  }

  setStateShoppingCart(valueButton) {
    this.setState({
      productCartState: valueButton,
    });
  }

  setShoppingCart(productCart) {
    const { increaseProduct, decreateProduct } = this.props;
    const { productCartState } = this.state;
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
            style={ { color: 'black' } }
            data-testid="shopping-cart-product-quantity"
          >
            { product.countTotal }
          </h2>
          <div>
            <button
              type="button"
              value={ productCartState }
              onClick={ () => {
                increaseProduct(product.id);
                this.setStateShoppingCart('Increase');
              } }
              data-testid="product-increase-quantity"
            >
              Aumenta
            </button>
          </div>
          <div>
            <button
              type="button"
              value={ productCartState }
              onClick={ () => {
                decreateProduct(product.id);
                this.setStateShoppingCart('Decreate');
              } }
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
  decreateProduct: PropTypes.func.isRequired,
  increaseProduct: PropTypes.func.isRequired,
  productCart: PropTypes.arrayOf.isRequired,
};

export default CarrinhoCompras;
