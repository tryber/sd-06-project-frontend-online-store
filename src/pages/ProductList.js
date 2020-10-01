import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import shoppingCart from '../images/shopping-cart.png';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
    this.renderCategoryNames = this.renderCategoryNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);

    this.state = {
      cat: [],
      filter: '',
      products: [],
      hasFilter: false,
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  async getCategoriesFromApi() {
    const result = await getCategories();
    this.setState({ cat: result });
  }

  async getProducts() {
    const { filter } = this.state;
    const result = await getProductsFromCategoryAndQuery('', filter);
    this.setState({
      products: result,
      hasFilter: true,
    });
  }

  handleChange({ target }) {
    this.setState({ filter: target.value });
  }

  async showCategoryItems(category) {
    const { id } = category;
    console.log(id);
    const result = await getProductsFromCategoryAndQuery(id, '');
    console.log(result);
    this.setState({
      products: result,
      hasFilter: true,
    });
  }

  renderCategoryNames() {
    const { cat } = this.state;
    return cat.map((item) => (
      <li
        onClick={ () => this.showCategoryItems(item) }
        key={ item.id }
        data-testid="category"
      >
        { item.name }
      </li>));
  }

  render() {
    const { products, hasFilter } = this.state;
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.getProducts }
        >
          Busca
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } height="50" alt="carrinho de compras" />
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ul>
          {this.renderCategoryNames()}
        </ul>
        <div>
          {hasFilter ? <Product products={ products } /> : <p>Vazio</p> }
        </div>
      </div>
    );
  }
}

export default ProductList;
