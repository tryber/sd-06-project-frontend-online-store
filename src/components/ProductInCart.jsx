import React, { Component } from 'react'

export default class ProductInCart extends Component {
  constructor() {
    super();
    this.mountState = this.mountState.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this)
    this.state = {
      name: '',
      quantity: 0,
    }
  }

  componentDidMount() {
    this.mountState()
  }

  mountState() {
    const { product } = this.props;
    this.setState({
      name: product.title,
      quantity: product.quantityInCart,
    })
  }

  addQuantity() {
    this.setState((state, props) => ({
      quantity: state.quantity + 1,
    }))
  }

  removeQuantity() {
    this.setState((state, props) => ({
      quantity: state.quantity - 1,
    }))
  }

  removeProduct() {
    this.setState({
      quantity: 0
    })
  }

  renderProduct() {
    return (
      <div>
        <p data-testid="shopping-cart-product-name">
          { this.state.name }
        </p>
        <p id="quantity"  data-testid="shopping-cart-product-quantity">
          { this.state.quantity }
          <button type="button" data-testid="product-increase-quantity" onClick={ this.addQuantity }>+</button>
          <button type="button" data-testid="product-decrease-quantity" onClick={ this.removeQuantity }>-</button>
          <button type="button" onClick={ this.removeProduct }>X</button>
        </p>
      </div>
    )
  }

  render() {
    const zero = 0;
    return (
      this.state.quantity > zero ? this.renderProduct() : ''
    )
  }
}
