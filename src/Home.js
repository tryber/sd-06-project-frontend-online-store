import React from 'react';
import * as api from './services/api';
import ListCards from './ListCards';
import CategoryListener from './CategoryListener';
import ButtonShoppingCart from './ButtonShoppingCart';
import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: '',
      filterId: 'MLB5672',
      searchQuery: '',
      loading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleSearch() {
    const { filterId: categoryId, searchQuery: query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => response.results)
      .then((products) => this.setState({ products, loading: false }));
  }

  handleState({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { searchQuery, products, loading } = this.state;
    const initMsg = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div className="home-container">
        <div className="header-container">
          <ButtonShoppingCart />
        </div>
        <div className="store-container">
          <div className="categories-container">
            <CategoryListener />
          </div>
          <div className="gallery-container">
            <div>
              <input
                type="text"
                placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
                data-testid="query-input"
                name="searchQuery"
                value={ searchQuery }
                onChange={ this.handleState }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.handleSearch }
              >
                Pesquisar
              </button>
            </div>
            <div>
              { products === '' ? <p data-testid="home-initial-message">{ initMsg }</p>
                : ListCards(products) }
              {(loading === true) ? <p>Loading...</p> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
