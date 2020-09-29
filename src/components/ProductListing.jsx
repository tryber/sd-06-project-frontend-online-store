import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shopping-cart.svg';
import CategoriesListing from './CategoriesListing';
import * as api from '../services/api';

export default class ProductListing extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      categories: [],
      loading: true,
    }
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
        console.log(this.state.categories);
      },
    );
  }

  render() {
    const { categories } = this.state;
    const mapCategories = categories.map((categorie) => <CategoriesListing key={categorie.id} categorie={categorie} />)
    return (
      <div>
        <input type="text" />
        <div>
          <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
          <Link to="/ShoppingCart"><img
            src={shoppingCartImage} alt="Shopping cart button image." width="30px"
            data-testid="shopping-cart-button"
          /></Link>
        </div>
        
          {this.state.loading ? <span>Loading</span>: mapCategories}
        
      </div>
    )
  }
}
