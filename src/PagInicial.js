import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCategories from './components/ListCategories';
import * as api from './services/api';
import CardsContainer from './components/CardsContainer';
import CartItems from './components/CartItems';
import cart from './img/cart-image.png';

class PagInicial extends Component {
  constructor() {
    super();

    this.setValue = this.setValue.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.setProductCart = this.setProductCart.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);

    this.state = {
      category: '',
      value: '',
      products: [],
      empty: '',
      productCart: [],
      countProducts: '0',
    };
  }

  setValue({ target }) {
    this.setState({
      value: target.value,
    });
  }

  setProductCart(productName, productId) {
    this.setState((prevState) => ({
      productCart: prevState.productCart.concat({ name: productName, id: productId }),
      countProducts: (Number(prevState.countProducts) + 1).toString(),

    }));
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

  render() {
    const { value, products, productCart, countProducts } = this.state;
    const idInput = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div data-testid="home-initial-message">
        <form>
          <label htmlFor={ idInput }>
            { idInput }
          </label>
          <input
            data-testid="query-input"
            name="user-input"
            id={ idInput }
            type="text"
            onChange={ this.setValue }
            value={ value }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ (event) => {
              this.fetchApi();
              event.preventDefault();
            } }
          >
            Pesquisar
          </button>
        </form>
        <section data-testid="shopping-cart-button">
          <Link to="/CarrinhoCompras">
            <img
              src={ cart }
              alt="test"
              width="80px"
            />
          </Link>
          <div>
            <CartItems productCart={ productCart } countProducts={ countProducts } />
          </div>
        </section>
        <section>
          <ListCategories fetchCategory={ this.fetchCategory } />
        </section>
        <section>
          <CardsContainer setProductCart={ this.setProductCart } products={ products } />
        </section>
      </div>
    );
  }
}

export default PagInicial;
