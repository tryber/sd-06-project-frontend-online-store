import React from 'react';
import * as api from '../services/api';
import ProductList from '../components/ProductList';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const query = document.getElementById('search-label').value;
    api.getProductsFromCategoryAndQuery(query).then((items) => this.setState({
      products: items.results,
    }));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <label htmlFor="search-label">
          <input
            data-testid="query-input"
            type="text"
            id="search-label"
          />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <button type="button" onClick={ this.onClick } data-testid="query-button">
          Buscar
        </button>
        <div>
          {products.map((items) => (<ProductList
            key={ items.id }
            items={ items }
          />))}
        </div>
      </div>
    );
  }
}

export default HomePage;
