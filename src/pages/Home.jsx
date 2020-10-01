import React, { Component, Fragment } from 'react';
import * as api from '../services/api';
import ProductList from '../components/ProductList';

export default class Home extends Component {
  constructor() {
    super();
    this.onSearchTextSubmit = this.onSearchTextSubmit.bind(this);
    this.state = {
      products: [],
      emptyList: true,
    }
  }

  async onSearchTextSubmit(event) {
    event.preventDefault();
    const { value } = document.querySelector('#search-input');
    const resp = await api.getProductsFromCategoryAndQuery(value);
    this.setState(() => (
      (resp)
        ? { products: resp.results, emptyList: false }
        : { products: [], emptyList: true }
    ));
  }

  render() {
    const { products, emptyList } = this.state;
    return (
      <Fragment>
        <form>
          <label
            htmlFor="search-input"
            data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              id="search-input"
              type="text"
              name="search-text-field"
              data-testid="query-input" />
            <button
              name="search"
              type="submit"
              data-testid="query-button"
              onClick={this.onSearchTextSubmit}
            >Search</button>
          </label>
        </form>
        <ProductList products={products} emptyList={emptyList}/>
      </Fragment>
    );
  }
}
