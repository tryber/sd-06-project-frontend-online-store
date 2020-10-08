import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoryDisplay from '../components/CategoryDisplay';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';

class HomePage extends Component {
  constructor() {
    super();

    this.filterCard = this.filterCard.bind(this);
    this.messageOnChange = this.messageOnChange.bind(this);

    this.state = {
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      products: [],
    }
  }

  messageOnChange(message) {
    this.setState({ message: message });
  };

  async filterCard(category, searchText) {
    let myMessage = 'Carregando...';
    this.setState(
      { message: myMessage },
      async () => {
        const products = await api.getProductsFromCategoryAndQuery(category, searchText);
        if ( products.results.length === 0 ) {
          myMessage = 'Nenhum produto foi encontrado';
        } else {
          myMessage = 'Produtos Carregados!';
        }
        this.setState({
          message: myMessage,
          products: products.results,
        });
      });
  }

  render() {
    const { message, products } = this.state;
    return (
      <div className="home">
        <header className="app-header">
          <img className="logo" src={logo} alt="Logo da Trybe" />
          <div className="search-bar">
            <h1>Project - Front-End Online Store! </h1>
            <SearchBar onFilter={this.filterProducts} msgChange={this.messageOnChange} />
            <h5 data-testid="home-initial-message" className="message">{message}</h5>
          </div>
          <div className="my-cart">
            <ShoppingCartButton />
          </div>
        </header>

        <main className="main-container">
          <CategoryList onFilter={this.filterProducts} />
          <ProductList products={ products } />
        </main>
      </div>
    );
  }
}
  
export default Home;
