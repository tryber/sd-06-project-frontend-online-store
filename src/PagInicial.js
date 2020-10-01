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

  async fetchApi() {
    const { value, category } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(category, value);
    this.setState(() => ({
      products: result.results,
    }));
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
          <ListCategories />
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
