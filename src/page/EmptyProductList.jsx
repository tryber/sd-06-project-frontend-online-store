import React from 'react';
import * as api from '../services/api';
import '../App.css';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';

class EmptyProductList extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      product: undefined,
      query: undefined,
      categoryID: "MLB1000",
    }
  }

  handleChange({ target }) {
    const value = target.value;
    this.setState({
      query: value,
    });
  }

  async handleClick() {
    const { query, categoryID } = this.state;
    const fetch = await api.getProductsFromCategoryAndQuery(categoryID, query);
    this.setState({
      product: fetch.results,
    });
    console.log(fetch.results);
  }

  render() {
    const { product } = this.state;
    return (
      <div className="App">
        <input data-testid="query-input" onChange={this.handleChange} />
        <button data-testid="query-button" onClick={this.handleClick}>Pesquisar</button>
        <button><Link data-testid="shopping-cart-button" to="/shopping-cart">Seu carrinho está vazio</Link></button>
        {product ? <ProductList list={product} /> : <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>}
        <CategoryFilter />
      </div>
    );
  }
}

export default EmptyProductList;
