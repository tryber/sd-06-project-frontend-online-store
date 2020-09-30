import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart.png';
import { getCategories } from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
    this.createRadios = this.createRadios.bind(this);

    this.state = {
      cat: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  async getCategoriesFromApi() {
    const result = await getCategories();
    this.setState({ cat: result });
  }

  createRadios() {
    const { cat } = this.state;
    return cat.map((item) => (
      <li key={ item.id } data-testid="category">{ item.name }</li>));
  }

  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } height="50" alt="carrinho de compras" />
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ul>
          {this.createRadios()}
        </ul>
      </div>
    );
  }
}

export default ProductList;
