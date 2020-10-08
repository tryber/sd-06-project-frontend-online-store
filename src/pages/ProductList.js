import React from 'react';
import PropTypes from 'prop-types';
import { Product, ShoppingCart } from '../components';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../App.css';

class ProductList extends React.Component {
  constructor() {
    super();

    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
    this.renderCategoriesNames = this.renderCategoriesNames.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.setTotalItems = this.setTotalItems.bind(this);

    this.state = {
      categories: [],
      selectedCategoryId: '',
      searchText: '',
      products: [],
      totalItems: 0,
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
    this.setTotalItems();
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  setTotalItems() {
    const { location } = this.props;
    const { totalFromDetails } = location;
    if (totalFromDetails) {
      this.setState({ totalItems: totalFromDetails });
    }
  }

  async getCategoriesFromApi() {
    const requestReturn = await getCategories();
    this.setState({ categories: requestReturn });
  }

  async getProducts() {
    const { selectedCategoryId, searchText } = this.state;
    const requestReturn = await getProductsFromCategoryAndQuery(
      selectedCategoryId, searchText,
    );
    this.setState({ products: requestReturn.results });
  }

  updateCart() {
    this.setState((state) => ({ totalItems: state.totalItems + 1 }));
  }

  handleQuery({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => (this.getProducts()));
  }

  renderCategoriesNames() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category, index) => (
          <label
            htmlFor={ index }
            key={ category.id }
          >
            <input
              id={ index }
              name="selectedCategoryId"
              type="radio"
              value={ category.id }
              data-testid="category"
              onClick={ this.handleQuery }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }

  renderProducts() {
    const { products, totalItems } = this.state;
    return (
      <Product
        products={ products }
        updateCart={ this.updateCart }
        totalItems={ totalItems }
      />
    );
  }

  render() {
    const { products, totalItems } = this.state;
    return (
      <div>
        <header className="header-container">
          <nav className="nav-items">
            <input
              className="filter-input"
              type="text"
              data-testid="query-input"
              onChange={ this.onSearchTextChange }
            />
            <button
              className="search-button"
              type="button"
              data-testid="query-button"
              onClick={ this.handleQuery }
            >
              Busca
            </button>
            <ShoppingCart totalItems={ totalItems } />
          </nav>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
        <div className="display-container">
          <form className="categories">
            {this.renderCategoriesNames()}
          </form>
          <div className="products-container">
            {products ? this.renderProducts() : <p />}
          </div>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  location: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
