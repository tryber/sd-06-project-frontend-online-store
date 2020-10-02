import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      product:  {},
      loading: true
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { id } = this.props.match.params;
    const response = await Api.getProductFromId(id);
    this.setState({product: response})
    
  }

  render() {
    if (this.state.product !== undefined){
      const { title, thumbnail, price, id } = this.state.product;
      return (
        <section>
          <Link to="/">Voltar</Link>
          <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
          <section key={id}>
            <h1 data-testid="product-detail-name">{title}</h1>
            <img src={thumbnail} />
            <span>{`R$${price}`}</span>
          </section>
          <button type="button" id={id} data-testid="product-detail-add-to-cart" onClick={() => {this.props.cartAdd(this.state.product)}}>Adicionar ao cart</button>
        </section>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
        
    }
  } 
}

export default ProductDetails;
