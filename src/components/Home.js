import React from 'react';
import * as api from '../services/api';
import ItemCard from './ItemCard';
import Header from './Header';
import './Home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
    this.returnCategories = this.returnCategories.bind(this);
    this.chooseCategories = this.chooseCategories.bind(this);

    this.state = {
      search: '',
      products: [],
      categories: [],
      selectedCategoryArray: [],
    };
  }

  componentDidMount() {
    const categoriesList = [];
    api.getCategories()
      .then((result) => result.forEach((item) => categoriesList.push(item)))
      .then(() => this.setState({
        categories: categoriesList,
      }));
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleAPI() {
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', search);
    this.setState({
      products: result.results,
    });
  }

  returnCategories() {
    const { categories } = this.state;
    return categories.map((category) => (
      <button
        data-testid="category"
        key={ category.id }
        type="button"
        id={ category.id }
        onClick={ this.chooseCategories }
      >
        { category.name }
      </button>
    ));
  }

  async chooseCategories({ target }) {
    const result = await api.getProductsFromCategoryAndQuery(target.id, '');
    this.setState({ selectedCategoryArray: result.results });
  }

  render() {
    const { search, products, selectedCategoryArray } = this.state;
    return (
      <div>
        <Header />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <input
            data-testid="query-input"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChanges }
            className="query-input"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleAPI }
          >
            Pesquisar
          </button>
          <p>{this.returnCategories()}</p>
          <div className="products-list">
            {search === undefined
              ? <p data-testid="home-initial-message">Nenhum produto foi encontrado</p>
              : products.map((item) => <ItemCard key={ item.id } product={ item } />)}
          </div>
        </div>
        <div className="products-list">
          {selectedCategoryArray
            .map((product) => <ItemCard key={ product.id } product={ product } />)}
        </div>
      </div>
    );
  }
}

export default Home;
