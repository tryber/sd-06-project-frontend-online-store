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
      filterId: '',
      searchQuery: '',
      loading: false,
      productsOnCart: [],
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
    if (name === 'productsOnCart') {
      this.setState((actualState) => ({ [name]: [...actualState.productsOnCart,
        JSON.parse(value)] }));
    } else if (name === 'filterId') {
      this.setState({ [name]: value }, () => {
        this.handleSearch();
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    const { searchQuery, products, loading, productsOnCart } = this.state;
    const initMsg = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div className="home-container">
        <div className="header-container">
          { ButtonShoppingCart(productsOnCart) }
        </div>
        <div className="store-container">
          <div className="categories-container">
            <CategoryListener handleCategory={ this.handleState } />
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
                : ListCards(products, this.handleState) }
              {(loading === true) ? <p>Loading...</p> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
