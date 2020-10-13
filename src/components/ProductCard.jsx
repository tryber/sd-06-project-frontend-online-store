import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DetailedProduct, BtnAddToCart } from './';

export default class ProductCard extends Component {
  constructor(props) {
    super();

    this.state = {
      details: false,
      productId: props.product.id,
      title: props.product.title,
      price: props.product.price,
      thumbnail: props.product.thumbnail,
      quantity: 1,
      availableQuantity: props.product.available_quantity,
    };

    this.openDetails = this.openDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {

    const obj = {
      title: this.state.title,
      price: this.state.price,
      thumbnail: this.state.thumbnail,
      quantity: this.state.quantity,
      availableQuantity: this.state.availableQuantity,
    };

    if (!localStorage.getItem('cart')) {
      const array = [];
      array.push(obj);
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(array));
    } else {
      const save = JSON.parse(localStorage.getItem('cart'));
      save.push(obj);
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(save));
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
