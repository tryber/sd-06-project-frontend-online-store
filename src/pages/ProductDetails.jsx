import React, { Component } from 'react';
import * as Api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      cards: [],
      product: {},
    }
  }
  
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const { id, name } = this.props.match.params;
    const getProducts = await Api.getProductsFromCategoryAndQuery(name)
      .then(resolve => resolve.results);
    this.setState({ cards: getProducts }, () => {
      this.setState({
        product: this.filterProduct(id),
      });
    });
  }

  filterProduct(id) {
    return this.state.cards.find((element) => element.id === id);
  }
  
  render() {      
    const { title, thumbnail, price, id } = this.state.product;
    console.log(this.state.product);
    return (
      <section>
        <section key={id}>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={thumbnail} />
          <span>{`R$${price}`}</span>
        </section>
        <button type="button">Adicionar ao cart</button>
      </section>
    );
  }
}

export default ProductDetails;
