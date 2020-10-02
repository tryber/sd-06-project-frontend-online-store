import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api'
import '../styles/Home.css';
import cart from './../img/cart.png';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
    }
    this.getCategory = this.getCategory.bind(this);
    this.categoryApi = this.categoryApi.bind(this);
  }

  async componentDidMount() {
    const categoriesObjects = await api.getCategories();
    const categories = categoriesObjects.map(category => category);
    this.setState({ categories });
  }

  async categoryApi(categoryId) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({ products: products.results });
  }

  getCategory(event) {
    const categoryId = event.target.value;
    this.categoryApi(categoryId);
  }

  render() {
    const { categories } = this.state;
    return (
      <Fragment>
        <section>
          { 
            categories.map(category => {
              return (
                <label htmlFor="category" data-testid="category" key={category.name}>
                  <input type="radio" name="category" value={ category.id } onChange={this.getCategory} />
                  { category.name }
                </label>
              );
            })
          }
        </section>
        <main>
          <div className="contain-main">
            <label htmlFor="search-input" data-testid="home-initial-message">
              <input id="search-input" />
              Digite algum termo de pesquisa ou escolha uma categoria.
            </label>
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ cart } alt="icone do carrinho" className="icon"/>
            </Link>
          </div>
        </main>
      </Fragment>
    );
  }
}

