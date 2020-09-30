import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Cart from '../images/cart.png';

class CategoryList extends Component {
  constructor() {
    super();
    this.requestCategories = this.requestCategories.bind(this);
    this.checkInputCategorie = this.checkInputCategorie.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.state = {
      categories: [],
      query: '',
      categoryId: '',
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  // chamamos a funcao requestCategories dentro de componentDidMount
  // pois esta ultima nao aceita usarmos o setState dentro dela
  async requestCategories() {
    const requestCategories = await api.getCategories();
    this.setState({
      categories: requestCategories,
    });
  }

  handleAreaChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  checkInputCategorie({ target }) {
    const { name } = target;
    this.setState({
      categoryId: '',
    });
    this.setState({
      categoryId: name,
    });
  }

  searchApiProducts(categoryId, query) {
    api.getProductsFromCategoryAndQuery(categoryId, query);
  }

  render() {
    const { categories, query, categoryId } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input
          type="text"
          name="query"
          value={ query }
          data-testid="query-input"
          onChange={ this.handleAreaChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchApiProducts(categoryId, query) }
        >
          Pesquisar
        </button>
        ;
        <Link to="/cart">
          <img
            data-testid="shopping-cart-button"
            width="50px"
            src={ Cart }
            alt="card"
          />
        </Link>
        <ul>
          {categories.map((element) => (
            <div data-testid="category" key={ element.id }>
              <label htmlFor="label">
                {element.name}
                <input
                  type="checkbox"
                  name={ element.id }
                  onClick={ this.checkInputCategorie }
                />
              </label>
            </div>
          ))}
          {/* aqui usamos .map para mapear o array que vem do objeto json,
          pegando todas as categorias com categories.name.
          Depois de listarmos o nome da categoria, criamos o
           input de tipo checkbox que ira receber a funcao para filtrar os elementos */}
        </ul>
      </div>
    );
  }
}
export default CategoryList;
