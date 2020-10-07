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
      cartProducts: [],
      quantityCartProducts: 0,
      totalCartProducts: 0,
      loading: false,
    };

    this.searchProduct = this.searchProduct.bind(this);
    this.addCart = this.addCart.bind(this);
    this.searchCategoryProduct = this.searchCategoryProduct.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
    if (localStorage.Cart) {
      this.setCartQuantity();
    }
  }

  setCartQuantity() {
    const total = JSON.parse(localStorage.Cart);
    const initialValue = 0;
    const result = total
      .map((item) => item.quantityCartProducts)
      .reduce((acc, curr) => acc + curr, initialValue);
    this.setState({ totalCartProducts: result });
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

  addCart(product) {
    let result = 1;
    if (localStorage.Cart) {
      const total = JSON.parse(localStorage.Cart);
      result = total
        .map((item) => item.quantityCartProducts)
        .reduce((acc, curr) => acc + curr, 1);
    }
    this.setState(
      {
        cartProducts: [product],
        quantityCartProducts: 1,
        totalCartProducts: result,
      }, () => {
        if (localStorage.Cart) {
          const update = JSON.parse(localStorage.Cart);
          const menosUm = -1;
          const { cartProducts, quantityCartProducts } = this.state;
          const indexCart = update
            .findIndex((item) => item.cartProducts[0].id === cartProducts[0].id);
          if (indexCart !== menosUm) {
            const value = update[indexCart].quantityCartProducts + 1;
            update[indexCart].quantityCartProducts = value;
            localStorage.Cart = JSON.stringify(update);
          } else {
            localStorage.Cart = JSON.stringify(
              [...JSON.parse(localStorage.Cart), {
                quantityCartProducts,
                cartProducts: [product],
              }],
            );
          }
        } else {
          const { quantityCartProducts } = this.state;
          localStorage.Cart = JSON.stringify([
            {
              quantityCartProducts,
              cartProducts: [product],
            },
          ]);
        }
      },
    );
  }

  async renderCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories, products, loading, totalCartProducts } = this.state;
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
              <span data-testid="shopping-cart-size">{ totalCartProducts }</span>
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
                <label
                  htmlFor={ categorie.id }
                  data-testid="category"
                >
                  <input
                    type="radio"
                    name="categoria"
                    id={ categorie.id }
                    onClick={ this.searchCategoryProduct }
                  />
                  { categorie.name }
                </label>
              </div>
            )) }
          </ul>
          <div className="div-all-products">
            { loading ? <p>Produto não encontrado</p>
              : products.map((product) => (
                <div key={ product.id }>
                  <Product
                    id={ product.id }
                    title={ product.title }
                    image={ product.thumbnail }
                    price={ product.price }
                    product={ product }
                  />
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                    onClick={ () => this.addCart(product) }
                  >
                    Add to Cart
                  </button>
                </div>
              )) }
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
