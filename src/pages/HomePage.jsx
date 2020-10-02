import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';
// import * as Api from '../services/api';

class HomePage extends Component {
  constructor() {
    super();
    this.updateId = this.updateId.bind(this);
    this.state = {
      categoriesId: '',
      cart: [],
    }
  }

  updateId(id) {
    this.setState({
      categoriesId: id,
    }) 
  }

  

  // fetchProducts = async (query) => {
  //   const categoriesId = this.props.categoriesId
  //   const getProducts = await Api.getProductsFromCategoryAndQuery(query, categoriesId)
  //     .then(resolve => resolve.results);
  //   this.setState({
  //     card: getProducts,
  //   });
  // }
  
  render() {
    return (
      <div>
        {/* <ProductsList fetchProductsList={this.fetchProducts} card={this.state.card}
        categoriesId={this.state.categoriesId}/> */}
        <Link data-testid="shopping-cart-button" to={{pathname: `/cart` , state: {cart: this.state.cart}}}>CART - Itens no carrinho: {this.props.cartAdd}</Link>
        <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
        <Categories updateId={this.updateId} />
        <ProductsList categoriesId={this.state.categoriesId} cart={this.props.cartAdd}/>
      </div>
    );
  }
}

export default HomePage;
