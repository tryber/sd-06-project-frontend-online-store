import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import freeShipping from '../img/free-shipping.png';
import { DetailedProduct, BtnAddToCart, FreeShipping, CalcShipping } from './';

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
    this.plainProduct = this.plainProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.calcShipping = this.calcShipping.bind(this);
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
    this.setState({ details: true });
  }

  plainProduct() {
    const { cartProducts, product } = this.props
    const { title, price, thumbnail, id, shipping } = product;

    return (
      <div data-testid="product" onClick={ this.openDetails }>
        <div>{title}</div>
        <div>{price}</div>

        <img src={thumbnail} alt={title} />
        {
          shipping.free_shipping
          ? <FreeShipping />
          : <CalcShipping />
        }
        <Link
          to={{
            pathname: `/productDetails/${id}`,
            state: { cartProducts }
          }}
          data-testid="product-detail-link"
          >
            DETALHES
          </Link>
      </div>
    );
  }

  calcShipping() {
    return (
      <section>Calcule o frete</section>
    )
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
          />
          <BtnAddToCart addToCart={this.addToCart} />
        </>
        : <>
          <this.plainProduct />
          <BtnAddToCart addToCart={this.addToCart} />
          </>
    );
  }
}
