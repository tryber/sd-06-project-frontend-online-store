import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import { ProductCard, CategoryList } from '../components';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.loadCategories = this.loadCategories.bind(this);

    this.state = {
      categories: [],
      query: '',
      products: [],
    };
  }

  componentDidMount() {
    this.loadCategories();
  }

  async loadCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async handleClick() {
    const { query } = this.state;
    const productsFromQuery = await api.getProductsFromCategoryAndQuery(query);
    this.setState({
      products: productsFromQuery.results,
    });
  }

  renderProduct() {
    const { products } = this.state;
    const empty = 0;
    if (products.length > empty) {
      return products.map((product) => (
        <ProductCard
          key={ product.id }
          props={ product }
        />));
    }
    return <span>Sem Items</span>;
  }

  render() {
    const { categories } = this.state;

    return (
      <section>
        <CategoryList categories={ categories } />
        <div data-testid="home-initial-message">
          <input data-testid="query-input" type="text" onChange={ this.handleChange } />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button
            data-testid="query-button"
            onClick={ this.handleClick }
            type="button"
          >
            Pesquisar
          </button>
          <button type="button">
            <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
          </button>
          <div className="productsList">
            { this.renderProduct() }
          </div>
        </div>
      </section>
    );
  }
}

export default ShopList;
