import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: [],
    }
  }

  buyingHandler() {
    this.setState((prevState, props) => {
      shoppingCart: (...prevState, this.shoppingCart)
    })
  }

  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt="Thumbnail" />
        <h4>{ title }</h4>
        <h5>{ price }</h5>
<<<<<<< HEAD
        <Link to="ShoppingCart">
          ADICIONAR AO CARRINHO
        </Link>
=======
        <Link
          to={ { pathname: `/product/${id}`, product: this.props.product } }
          data-testid="product-detail-link"
        >
        Detalhes</Link>
>>>>>>> 31ebb6c13eff8ddcc2ff0b712b9e05f634a62bed
      </div>
    );
  }
}
