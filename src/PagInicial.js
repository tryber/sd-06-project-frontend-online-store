import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCategories from './components/ListCategories';
import * as api from './services/api';
import CardsContainer from './components/CardsContainer';

class PagInicial extends Component {
  constructor() {
    super();
    this.setValue = this.setValue.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);

    this.state = {
      category: '',
      value: '',
      products: [],
    };
  }

  setValue({ target }) {
    this.setState({
      value: target.value,
    });
  }

  async fetchCategory(param) {
    const { empty } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(param, empty);
    this.setState(() => ({
      products: result.results,
    }));
  }

  async fetchApi() {
    const { value, category } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(category, value);
    this.setState(() => ({
      products: result.results,
    }));
  }

  selectCategory(select, categ) {
    this.setState({
      products: select,
      category: categ,
    });
  }

  render() {
    const { value, products } = this.state;
    return (
      <div data-testid="home-initial-message">
        <form>
          <label htmlFor="user-input">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              data-testid="query-input"
              name="user-input"
              type="text"
              onChange={ this.setValue }
              value={ value }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ (event)=> {
              this.fetchApi();
  event.preventdefault();
} }
          >
            Pesquisar
          </button>
        </form>
        <section>
          <ListCategories fetchCategory={ this.fetchCategory } />
        </section>
        <section>
          <CardsContainer products={ products } />
        </section>
        <Link to="/CarrinhoCompras" data-testid="shopping-cart-button">
          <button type="button">Carrinho de Compras</button>
        </Link>
      </div>
    );
  }
}

export default PagInicial;
