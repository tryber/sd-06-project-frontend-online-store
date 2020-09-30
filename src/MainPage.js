import React from 'react';
import Product from './Product';
import * as api from './services/api';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      loading: true,
    };

    this.searchProduct = this.searchProduct.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  async searchProduct() {
    const { value } = document.getElementById('text-search');
    const { results } = await api.getProductsFromCategoryAndQuery('', value);
    this.setState({ products: results, loading: false });
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
          <input
            data-testid="query-input"
            id="text-search"
            type="text"
          />
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
            {categories.map((categorie) => (
              <li key={ categorie.id } data-testid="category" className="categories">
                { categorie.name }
              </li>
            ))}
          </ul>
          <div className="div-all-products">
            {loading ? <span />
              : products.map((product) => (
                <Product
                  key={ product.id }
                  title={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />
              ))}
          </div>
        </div>

      </div>
    );
  }
}

export default MainPage;
