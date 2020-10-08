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
    if (product.ammount === 0) return;
    product.ammount -= 1;
    const { cartList } = this.props;
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
            <span>
              Quantidade:
            </span>
            <button type="button" onClick={ () => this.handleIncreaseAmmount(product) }>+</button>
            <span>
              {product.ammount}
            </span>
            <button type="button" onClick={ () => this.handleDecreaseAmmount(product) }>-</button>
          </div>
        ))}
        <span
          data-testid="shopping-cart-product-quantity"
        >
          Quantidade de itens:
          {cartList.map((element) => element.ammount)
            .reduce((acc, currentValue) => acc + currentValue)}
        </span>
        <br />
        {cartList.map(({ price, ammount }) => price * ammount)
          .reduce((acc, currentValue) => acc + currentValue).toFixed(2)}
        <br />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ShoppingCart;
