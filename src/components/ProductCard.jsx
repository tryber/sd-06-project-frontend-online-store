import React, { Component } from 'react';
import { DetailedProduct, BtnAddToCart } from './';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: false,
      quantity: 1,
      productId: props.product.id,
      title: props.product.title,
      price: props.product.price,
      thumbnail: props.product.thumbnail,
      availableQuantity: props.product.available_quantity,
    };

    this.openDetails = this.openDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { productId, title, price, thumbnail, quantity, availableQuantity } = this.state;
    const chosenProduct = {
      productId,
      title,
      price,
      thumbnail,
      quantity,
      availableQuantity,
    };
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([chosenProduct]));
      this.props.updateCartItems(() => [chosenProduct]);
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const indexOfItemInCart = cart.findIndex(product =>
        product.productId === chosenProduct.productId);
      if (indexOfItemInCart === -1) {
        cart.push(chosenProduct)
      } else {
        cart[indexOfItemInCart].quantity += chosenProduct.quantity;
      }
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    this.props.updateCartIcon();
  }

  openDetails() {
    this.setState(prev => ({ details: !prev.details }));
  }

  render() {
    const { cartProducts, product } = this.props;
    const { quantity, details } = this.state;

    return (
      details
        ? <>
          <DetailedProduct
            cartProducts={cartProducts}
            product={product}
            quantity={quantity}
            details={details}
            openDetails={this.openDetails}
          />
          <BtnAddToCart addToCart={this.addToCart} />
        </>
        : <>
          <DetailedProduct
            cartProducts={cartProducts}
            product={product}
            quantity={quantity}
            details={details}
            openDetails={this.openDetails}
          />
          <BtnAddToCart addToCart={this.addToCart} />
        </>
    );
  }
}
