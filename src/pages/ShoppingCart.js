import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };

    this.updatingCartListState = this.updatingCartListState.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  componentDidMount() {
    this.updatingCartListState();
  }

  updatingCartListState() {
    const { cartList } = this.props;
    this.setState({ cartList });
  }

  handleIncreaseAmmount(product) {
    product.ammount += 1;
    const { cartList } = this.props;
    this.setState({ cartList });
  }

  handleDecreaseAmmount(product) {
    if (product.ammount === 1) return;
    product.ammount -= 1;
    const { cartList } = this.props;
    this.setState({ cartList });
  }

  removeProduct(id) {
    const { cartList } = this.props;
    cartList.forEach((item, index) => {
      if (item.id === id) {
        cartList.splice(index, 1);
      }
    });
    this.setState({ cartList });
  }

  render() {
    const { cartList } = this.state;

    const emptyCart = 0;
    if (!cartList || cartList.length === emptyCart) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Voltar</Link>
        </div>
      );
    }
    return (
      <div>
        {cartList.map((product) => (
          <div key={ product.id }>
            <h4 data-testid="shopping-cart-product-name">
              { product.title }
            </h4>
            <p>
              {`R$ ${product.price}`}
            </p>
            <button
              type="button"
              className="delete"
              onClick={ () => this.removeProduct(product.id) }
            >
              X
            </button>
            <span>
              Quantidade:
            </span>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => this.handleIncreaseAmmount(product) }
            >
              +
            </button>
            <span data-testid="shopping-cart-product-quantity">
              {product.ammount}
            </span>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => this.handleDecreaseAmmount(product) }
            >
              -
            </button>
          </div>
        ))}
        <p>
          Quantidade de itens:
          {cartList.map((element) => element.ammount)
            .reduce((acc, currentValue) => acc + currentValue)}
        </p>
        <h4>
          Total:
          {cartList.map(({ price, ammount }) => price * ammount)
            .reduce((acc, currentValue) => acc + currentValue).toFixed('2')}
        </h4>
        <button type="button">Finalizar Compra</button>
        <Link to="/"><h4>Voltar</h4></Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ShoppingCart;
