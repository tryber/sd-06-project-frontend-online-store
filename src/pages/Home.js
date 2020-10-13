import React from 'react';
import PropTypes from 'prop-types';
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
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
  }

  filterCategory(event) {
    this.setState({ categoryId: event.target.value }, () => this.fetchApi());
  }

  handleSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  handleClick() {
    this.fetchApi();
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
    const { addToCart } = this.props;
    const { products } = this.state;
    return (
      <div className="container">
        <Categories filterCategory={ this.filterCategory } />
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
          <ProductList products={ products } addToCart={ addToCart } />

        </div>
        <CartBtn />
      </div>
    );
  }
}

Home.propTypes = { addToCart: PropTypes.func.isRequired };

export default Home;
