import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { arrayProductList } from '../dados/arrayProductList';
import { cart } from '../dados/cart';

class ProductDetails extends Component {
  constructor() {
    super();
    this.filterProduct = this.filterProduct.bind(this);
  }


  filterProduct() {
    const { id } = this.props.match.params;
    return arrayProductList.find((element) => element.id === id);
  }

  AddCart(product) {
    cart.push(product);
  }

  render() {
    const product = this.filterProduct();
    const { title, thumbnail, price, id } = product;

    return (
      <section>
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <section key={id}>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={thumbnail} />
          <span>{`R$${price}`}</span>
        </section>
        <button
          type="button"
          onClick={() => this.AddCart(product)}
          data-testid="product-detail-add-to-cart"
          >Adicionar ao cart</button>
      </section>
    );
  }
}

export default ProductDetails;
