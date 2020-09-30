import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import ProductCard from './ProductCard'

class ProductList extends React.Component {
  constructor () {
    super();
 
    this.onChangeInput = this.onChangeInput.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.verifyProducts = this.verifyProducts.bind(this);
  
    this.state = {
      searchText: '',
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      products: [],
    }
  }

  onChangeInput({ target }) {
    let myMessage = '';
    if (target.value === '') {
      myMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    } else {
      myMessage = 'Aguardando consulta...';
    }
    const text = target.value;
    this.setState({ 
      searchText: text,
      message: myMessage,
    });
  }

  async filterProducts(searchText) {
    let myMessage = 'Carregando...';
    this.setState(
      { message: myMessage },   // primeiro parametro por causa do Loading
      async () => {             // segundo parametro
        const products = await Api.getProductsFromCategoryAndQuery(undefined, searchText);
        if (products.length === 0) {
          myMessage = 'Nenhum produto foi encontrado';
        } else {
          myMessage = 'Produtos Carregados';
        }
        this.setState({
          message: myMessage,
          products,
        });
      });
  }

  verifyProducts(products) {
    if (products.length > 0) {
      return (
        <div className="product-list">
          {products.map((item) => <ProductCard key={item.id} product={item} />)};
        </div>
      )
    }
  }

  render () {
    const { searchText, message, products } = this.state;
    return (
      <div>
        <input type="text" data-testid="query-input" name="query-input" 
          onChange={this.onChangeInput}>
        </input>
        <button 
          type="button" data-testid="query-button"
          onClick={() => { if (searchText !== '') this.filterProducts(searchText)}}
        >Search
        </button>
        <Link to="/pages/ShoppingCart" data-testid="shopping-cart-button">Shopping Cart</Link>
        <h4 data-testid="home-initial-message">{message}</h4>

        {this.verifyProducts(products)}
      </div>
    );
  }
}

export default ProductList;