import React from 'react';
import { Link } from 'react-router-dom';
import { Product, Loading } from '../components';
//import Product from '../components/Product';
//import Loading from '../components/Loading';
import shoppingCart from '../images/shopping-cart.png';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../App.css';

class ProductList extends React.Component {
  constructor() {
    super();

    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
    this.renderCategoriesNames = this.renderCategoriesNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.setSelectedCategory = this.setSelectedCategory.bind(this);
    this.renderProducts = this.renderProducts.bind(this);

    this.state = {
      categories: [],
      filterText: '',
      products: [],
      hasFilter: false,
      isLoading: true,
      // selectedCategory: '',
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  async getCategoriesFromApi() {
    this.setState({ isLoading: true }, async () => {
      const requestReturn = await getCategories();
      this.setState({
        isLoading: false,
        categories: requestReturn,
      });
    });
  }

  async getProducts() {
    const { filterText } = this.state;
    const result = await getProductsFromCategoryAndQuery('', filterText);
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
    this.setState({ isLoading: true }, async () => {
      const requestResult = await getProductsFromCategoryAndQuery(id, '');
      this.setState({
        isLoading: false,
        products: requestResult,
      });
    });
  }

  handleChange({ target }) {
    this.setState({ filterText: target.value });
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
              name="category"
              type="radio"
              value={category.id}
              data-testid="category"
              onClick={() => this.showCategoryItems(category.id)}
            />
              { category.name }
          </label>
        ))};
      </div>
    );
    /*return categories.map((item, index) => (
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
      */
  }

  renderProducts() {
    const { products } = this.state;
    return <Product products={ products } />;
  }

  render() {
    const { hasFilter, isLoading, products } = this.state;
    if (isLoading) {
      return (<Loading />);
    }
    
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
          {this.renderCategoriesNames()}
        </form>
        <div>
          {hasFilter ? this.renderProducts() : <p /> }
        </div>
      </div>
    );
  }
}

export default ProductList;
