import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shopping-cart.svg';
import CategoriesListing from './CategoriesListing';
import ProductCard from './ProductCard';
import * as api from '../services/api';

export default class ProductListing extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.handleChangeTxt = this.handleChangeTxt.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.state = {
      categories: [],
      loading: false,
      empty: false,
      searchText: '',
      products: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  async updateState() {
    this.setState(
      { loading: true },
      async () => {
        const myCategories = await api.getCategories();
        this.setState({
          categories: myCategories,
          loading: false,
        });
      },
    );
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

  render() {
    const { categories, loading } = this.state;
    const mapCategories = categories.map((categorie) => <CategoriesListing key={categorie.id} categorie={categorie} />)
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={this.handleChangeTxt} />
        <button type="button" data-testid="query-button" onClick={this.handleClick}>Pesquisar</button>
        <div>
          <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
          <Link to="/ShoppingCart"><img
            src={shoppingCartImage} alt="Shopping cart button image." width="30px"
            data-testid="shopping-cart-button"
          /></Link>
        </div>
        {this.state.loading ? <span>Loading</span> : mapCategories}
        <div>
          {loading ? <span>Loading</span> : this.renderCards()}
        </div>
      </div>
    );
  }
}
