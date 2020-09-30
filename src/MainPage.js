import React from 'react';
import * as api from './services/api';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.renderCategories();
  }

  async renderCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div className="div-search">
          <input type="text" />
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <span>
            <Link to="/shoppingcart" data-testid="shopping-cart-button">Icone de carrinho</Link>
          </span>
        </div>

        <h2>Categorias:</h2>

        <div className="div-main">
          <ul className="list-side-categories">
            {categories.map((categorie) => (
              <li key={ categorie.id } data-testid="category" className="categories">
                { categorie.name }
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPage;
