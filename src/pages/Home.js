import React from 'react';
import Categories from './Categories';
import CartBtn from '../services/CartBtn';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      products: [],
      categoryId: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  handleClick() {
    this.fetchApi();
  }

  handleSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  async fetchApi() {
    const { categoryId, searchText } = this.state;
    const request = await getProductsFromCategoryAndQuery(categoryId, searchText);
    const { results } = request;
    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container">
        <Categories />
        <div className="searchField">
          <form>
            <input
              data-testid="query-input"
              type="text"
              name="research"
              onChange={ this.handleSearch }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </form>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <ProductList products={ products } />

        </div>
        <CartBtn />
      </div>
    );
  }
}

export default Home;
