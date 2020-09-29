import React from 'react';
import getProductsFromCategoryAndQuery from '../services/api'
import { Link } from 'react-router-dom';
import Cart from '../images/shopping-cart.png';


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "",
      categoryId: "",
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <input data-testid="query-input" type="text" onChange={this.setState{(query)}} />
          <button data-testid="query-button" onClick={(categoryId, query) => getProductsFromCategoryAndQuery(categoryId, query)}>Pesquisar</button>
        </div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ Cart } alt="shopping cart"/>
        </Link>
      </div>
    );
  }
}

export default Home;
