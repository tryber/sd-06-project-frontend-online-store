import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';

import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';

import './styles.css';

class SearchProduct extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.saveInputValue = this.saveInputValue.bind(this);
    this.handleSearchProduct = this.handleSearchProduct.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.loadCart = this.loadCart.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
      inputValue: '',
      products: [],
      cartProducts: [],
      cartProductsQuantity: 0,
    };
  }

  componentDidMount() {
    this.fetchCategories();
    this.loadCart();
  }

  componentWillUnmount() {
    const { cartProducts } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartProducts));
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  loadCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    const initialQuantity = 0;

    const cartProductsQuantity = cartProducts.reduce((accumulator, { quantity }) => accumulator += quantity, initialQuantity);

    this.setState({ cartProducts, cartProductsQuantity });
  }

  saveInputValue(inputValue) {
    this.setState({
      inputValue,
    });
  }

  async handleSearchProduct(event) {
    event.preventDefault();

    const { categoryId, inputValue } = this.state;

    if (!inputValue) {
      return;
    }

    const {
      results: products,
    } = await getProductsFromCategoryAndQuery(categoryId, inputValue);

    this.setState({
      products,
    });
  }

  async handleCategoryClick(categoryId) {
    const { inputValue } = this.state;

    const {
      results: products,
    } = await getProductsFromCategoryAndQuery(categoryId, inputValue);

    this.setState({
      products,
      categoryId,
    });
  }

  addItemToCart(id) {
    const { products, cartProducts, cartProductsQuantity } = this.state;
    const cartItems = [...cartProducts];
    const cartItem = products.find((product) => product.id === id);
    const itemAlreadyInCart = cartItems.findIndex(({ product }) => product.id === id);

    if (cartItems[itemAlreadyInCart]) {
      if (cartItems[itemAlreadyInCart].quantity === cartItem.available_quantity) return;

      cartItems[itemAlreadyInCart].quantity += 1;
    } else {
      cartItems.push({ product: cartItem, quantity: 1 });
    }

    const newCartProductsQuantity = cartProductsQuantity + 1;

    this.setState({ cartProducts: cartItems, cartProductsQuantity: newCartProductsQuantity });
  }

  render() {
    const { categories, inputValue, products, cartProductsQuantity } = this.state;
    return (
      <>
        <Link to="/shopping-cart" data-testid="shopping-cart-button" className="fa fa-shopping-cart cart-icon">
          {(!!cartProductsQuantity) && (
            <span
              data-testid="shopping-cart-size"
              className="cart-quantity"
            >
              {cartProductsQuantity}
            </span>
          )}
        </Link>
        <div className="search-product-content">
          <div>
            <h2>Categorias</h2>
            <ul>
              {categories.map(({ name, id }) => (
                <li key={ id }>
                  <button
                    data-testid="category"
                    type="button"
                    onClick={ () => this.handleCategoryClick(id) }
                  >
                    {name}
                  </button>
                </li>
              ))}

            </ul>
          </div>

          <div className="form-products">
            <form onSubmit={ this.handleSearchProduct }>
              <h1 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h1>
              <input
                onChange={ (e) => this.saveInputValue(e.target.value) }
                value={ inputValue }
                data-testid="query-input"
                type="text"
              />
              <button data-testid="query-button" type="submit">Pesquisar</button>
            </form>
            <div className="product-list">
              {products[0]
                ? products.map(({ title, thumbnail, price, id, shipping }) => (
                  <ProductCard
                    key={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                    freeShipping={ shipping.free_shipping }
                  >
                    <Link
                      data-testid="product-detail-link"
                      to={ { pathname: `/products/${id}`, state: { products } } }
                    >
                      Detalhes
                    </Link>
                    <button
                      type="button"
                      data-testid="product-add-to-cart"
                      onClick={ () => this.addItemToCart(id) }
                    >
                      Adicionar
                    </button>
                  </ProductCard>


                ))
                : (<p>Nenhum produto foi encontrado</p>
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchProduct;
