import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import { CategoryList, RenderProduct } from '../components';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadCategories = this.loadCategories.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      categories: [],
      query: '',
      products: [],
      selectedCategory: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.loadCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory } = this.state;
    if (selectedCategory !== prevState.selectedCategory) this.handleClick();
  }

  async loadCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async handleSelect({ target }) {
    this.setState({ selectedCategory: target.id }, async () => {
      await this.handleClick();
    });
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async handleClick() {
    this.setState({ loading: true });
    const { query, selectedCategory } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(selectedCategory, query);
    this.setState({
      products: products.results,
      loading: false,
    });
  }

  render() {
    const { categories, loading, products } = this.state;

    return (
      <section>
        <CategoryList categories={ categories } handleSelect={ this.handleSelect } />
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
            <RenderProduct loading={ loading } products={ products } />
          </div>
        </div>
      </section>
    );
  }
}

export default ShopList;
