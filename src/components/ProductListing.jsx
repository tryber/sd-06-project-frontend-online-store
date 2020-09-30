import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shopping-cart.svg';
import CategoriesListing from './CategoriesListing';
import ProductCard from './ProductCard';
import * as api from '../services/api';

export default class ProductListing extends Component {
  constructor() {
    super();
    this.handleChangeTxt = this.handleChangeTxt.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.state = {
      loading: false,
      empty: false,
      searchText: '',
      products: [],
      selectedCategory: 'none',
    };
  }

  handleChangeTxt(e) {
    this.setState({ searchText: e.target.value });
  }

  async handleClick() {
    this.setState(
      { loading: true },
      async () => {
        const textState = this.state.searchText;
        const myProds = await api.getProductsFromCategoryAndQuery(undefined, textState);
        const myProds2 = myProds ? myProds.results : [];
        if (!myProds2 || myProds2.length === 0) {
          this.setState({
            loading: false,
            empty: true,
          });
        } else {
          this.setState({
            products: myProds2,
            loading: false,
            empty: false,
          });
        }
      },
    );
  }
    
  renderCards() {
    const { products, empty } = this.state;
    const mapCards = products.map((product) => (
      <ProductCard key={product.id} title={product.title}
      thumbnail={product.thumbnail} price={product.price}
    />));
    return empty ? <span>Nenhum produto foi encontrado</span> : mapCards;
  }

  handleClickCategory(event) {
    event.preventDefault();
    this.setState({
      loading: true,
      selectedCategory: event.target.id,
    }, () => {
      this.setState({ loading: true },
        async () => {
          const { selectedCategory } = this.state;
          const fetchCategoryProducts = await api.getProductsFromCategoryAndQuery(selectedCategory, undefined);
          const myProds = fetchCategoryProducts.results;
          this.setState({
            products: myProds,
            loading: false,
          });
        }
      );
    });
  }

  render() {
    const { loading } = this.state;
    const { handleClickCategory } = this;

    return (
      <div>
        <input type="text" data-testid="query-input" onChange={this.handleChangeTxt} />
        <button type="button" data-testid="query-button" onClick={this.handleClick}>Pesquisar</button>
        <div>
          <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
          <Link to="/ShoppingCart"><img
            src={shoppingCartImage} alt="Shopping cart button." width="30px"
            data-testid="shopping-cart-button"
          /></Link>
        </div>
          <CategoriesListing onClick={handleClickCategory} />
        <div>
          {loading ? <span>Loading</span> : this.renderCards()}
        </div>
      </div>
    );
  }
}
