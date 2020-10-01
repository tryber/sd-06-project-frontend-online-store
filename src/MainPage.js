import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import * as api from './services/api';
import shoppingCartImage from './Images/shoppingcart.png';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      categorieId: '',
      products: [],
      loading: false,
    };

    this.searchProduct = this.searchProduct.bind(this);
    this.searchCategoryProduct = this.searchCategoryProduct.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  async searchProduct() {
    const { value } = document.getElementById('text-search');
    const { categorieId } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(categorieId, value);
    if (results.length >= 1) {
      this.setState({ products: results });
    } else {
      this.setState({ loading: true });
    }
  }

  async searchCategoryProduct({ target }) {
    const { value } = document.getElementById('text-search');
    const { id } = target;
    const { results } = await api.getProductsFromCategoryAndQuery(id, value);
    this.setState({ products: results, loading: false, categorieId: id });
  }

  async renderCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories, products, loading } = this.state;
    return (
      <div>
        <div className="div-search">
          <div className="top-bar">
            <input
              data-testid="query-input"
              id="text-search"
              type="text"
            />
            <Link to="/shoppingcart" data-testid="shopping-cart-button">
              <img width="30px" src={ shoppingCartImage } alt="Cart" />
            </Link>
          </div>
          <button type="button" data-testid="query-button" onClick={ this.searchProduct }>
            Search
          </button>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>

        </div>

        <h2>Categorias:</h2>

        <div className="div-main">
          <ul className="list-side-categories">
            { categories.map((categorie) => (
              <div className="categories" key={ categorie.id }>
                <input
                  type="radio"
                  name="categoria"
                  id={ categorie.id }
                  onClick={ this.searchCategoryProduct }
                />
                <label
                  htmlFor={ categorie.id }
                  data-testid="category"
                >
                  { categorie.name }
                </label>
              </div>
            )) }
          </ul>
          <div className="div-all-products">
            { loading ? <p>Produto não encontrado</p>
              : products.map((product) => (
                <Product
                  key={ product.id }
                  title={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />
              )) }
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
