import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CategoryDisplay from '../components/CategoryDisplay';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';

class HomePage extends React.Component {
  constructor() {
    super();

    this.filterCards = this.filterCards.bind(this);
    this.messageOnChange = this.messageOnChange.bind(this);

    this.state = {
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      products: [],
    }
  }

  messageOnChange(message) {
    this.setState({ message: message });
  };

  async filterCards(category, searchText) {
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
      <div>
        <header>
          <div>
            <h1>Project - Front-End Online Store! </h1>
            <SearchBar onFilter={this.filterCards} msgChange={this.messageOnChange} />
            <h5 data-testid="home-initial-message" >{message}</h5>
          </div>
          <div>
            <ShoppingCartButton />
          </div>
        </header>

        <main>
          <CategoryDisplay onFilter={this.filterCards} />
          <ProductList items={ products } />
        </main>
      </div>
    );
  }
}
  
export default HomePage;
