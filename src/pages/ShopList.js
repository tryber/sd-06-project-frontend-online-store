import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ShopList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <section>
          {(categories.length > 0)
            ? categories.map((category) => <p data-testid="category" key={category.id}>{category.name}</p>)
            : <span>Loading...</span>}
        </section>
        <div data-testid="home-initial-message">
          <input type="text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button type="button">
            <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
          </button>
        </div>
      </section>
    );
  }
}

export default ShopList;
