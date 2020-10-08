import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.renderShoppingCart = this.renderShoppingCart.bind(this);
    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
    this.setandoEstado = this.setandoEstado.bind(this);
    this.renderQuantity = this.renderQuantity.bind(this);

    this.state = {
      campo: 0,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    this.setandoEstado(state);
  }

  setandoEstado(estado) {
    estado.map((item) => this.setState({ [item.id]: 1, campo: 1 }));
  }

  decreaseButton(event) {
    const { id } = event;
    this.setState({
      [id]: this.state[id] - 1,
    });
  }

  increaseButton(event) {
    this.setState({
      [event.id]: this.state[event.id] + 1,
    });
  }

  renderQuantity(element) {
    const { campo } = this.state;
    if (campo < 1) return 1;
    if (this.state[element.id] < 1) return 1;
    return this.state[element.id];
  }

  renderShoppingCart() {
    const { location } = this.props;
    const { state } = location;
    if (state.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio.</span>
      );
    }

    return (
      <div>
        {state.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <button
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseButton(item) }
              type="button"
            >
              Diminuir
            </button>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              { this.renderQuantity(item) }
            </p>
            <button
              data-testid="product-increase-quantity"
              onClick={ () => this.increaseButton(item) }
              type="button"
            >
              Aumentar
            </button>
            <p
              data-testid="shopping-cart-product-price"
            >
              { item.price * this.renderQuantity(item) }
            </p>
          </div>
        ))}
        <p>
          Número total de ítens:
          { state.length }
        </p>
      </div>
    );
  }

  render() {
    return (
      this.renderShoppingCart()
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      map: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
