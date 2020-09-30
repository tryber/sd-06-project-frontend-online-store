import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ItemCard from './ItemCard';
import Categories from './Categories';
import Cart from '../images/shopping-cart.png';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAPI = this.handleAPI.bind(this);


    this.state = {
      search: '',
      products: [],
    };
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

  render() {
    const { search, products } = this.state;

    return (
      <div>
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
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleAPI }
          >
            Pesquisar
          </button>
          <div>
            {search === undefined
              ? <p data-testid="home-initial-message">Nenhum produto foi encontrado</p>
              : products.map((item) => <ItemCard key={ item.id } product={ item } />)}
          </div>
        </div>
        <Categories />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ Cart } alt="shopping cart" />
        </Link>
      </div>
    );
  }
}

export default Home;
