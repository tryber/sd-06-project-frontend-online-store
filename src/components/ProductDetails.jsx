import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      loading: false,
      product: {},
    };
  }


  componentDidMount() {
    this.fetchProduct()
  }

  async fetchProduct() {
    const { id, category_id } = this.props.match.params;
    this.setState({
      loading: true,
    },
      async () => {
        const products = await api.getProductsFromCategoryAndQuery(category_id, undefined);
        const results = await products.results;
        const selectedProduct = results.find((product) => product.id === id);
        this.setState({
          product: selectedProduct,
          loading: false,
        })
      }
    )
  }

  renderDetails() {
    const { id, title, price, thumbnail } = this.state.product;
    return (
      <div>
        <div>
          <p><span data-testid="product-detail-name">{title}</span> <span>{`Price: R$${price}`}</span></p>
          <p>{`ID: ${id}`}</p>
          <p><img src={thumbnail} alt={`${title}PIC`} /></p>
        </div>
        <div></div>
      </div>
    )

  }


  render() {
    return (
      <div>
        <Link to="/" >Voltar</Link>
        {this.state.loading ? <span>Loading</span> : this.renderDetails()}
        <Link to="/ShoppingCart" >Carrinho</Link>
      </div>
    )
  }
}