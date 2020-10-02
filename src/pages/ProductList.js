import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import shoppingCart from '../images/shopping-cart.png';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../App.css';

class ProductList extends React.Component {
  constructor() {
    super();

    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
    this.renderCategoryNames = this.renderCategoryNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.setSelectedCategory = this.setSelectedCategory.bind(this);
    this.renderProducts = this.renderProducts.bind(this);

    this.state = {
      categories: [],
      filter: '',
      products: [],
      hasFilter: false,
      // selectedCategory: '',
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  async getCategoriesFromApi() {
    const result = await getCategories();
    this.setState({ categories: result });
  }

  async getProducts() {
    const { filter } = this.state;
    const result = await getProductsFromCategoryAndQuery('', filter);
    this.setState({
      products: result,
      hasFilter: true,
    });
  }

  setSelectedCategory(id) {
    // this.setState({ selectedCategory: id });
    this.showCategoryItems(id);
  }

  async showCategoryItems(id) {
    const result = await getProductsFromCategoryAndQuery(id, '');
    this.setState({
      products: result,
      hasFilter: true,
    });
  }

  handleChange({ target }) {
    this.setState({ filter: target.value });
  }

  renderCategoryNames() {
    const { categories } = this.state;
    return categories.map((item, index) => (
      <label htmlFor={ index } key={ item.id }>
        <input
          id={ index }
          name="category"
          type="radio"
          value={ item.id }
          onChange={ () => this.setSelectedCategory(item.id) }
          // onClick={ () => this.showCategoryItems(item) }
          // key={ item.id }
          data-testid="category"
        />
        { item.name }
      </label>));
  }

  renderProducts() {
    const { products } = this.state;
    return <Product products={ products } />;
  }

  render() {
    const { hasFilter } = this.state;
    return (
      <div>
        <header className="header-container">
          <nav className="nav-items">
            <input
              className="filter-input"
              type="text"
              data-testid="query-input"
              onChange={ this.handleChange }
            />
            <button
              className="search-button"
              type="button"
              data-testid="query-button"
              onClick={ this.getProducts }
            >
              Busca
            </button>
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ shoppingCart } height="50" alt="carrinho de compras" />
            </Link>
          </nav>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
        <form className="categories">
          {this.renderCategoryNames()}
        </form>
        <div>
          {hasFilter ? this.renderProducts() : <p /> }
        </div>
      </div>
    );
  }
}

export default ProductList;
