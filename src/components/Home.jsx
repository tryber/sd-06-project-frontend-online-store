
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductList from './ProductList';
import * as Api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state ={
      userInput: '',
    }

    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnchange({ target }) {
    this.setState({
      userInput: target.value,
    });
  }

  async handleOnclick() {
    
    const response = await Api.getProductsFromCategoryAndQuery(undefined, this.state.userInput);
    this.setState({

    });
  }

  render() {
    return (
      <div>
        <input type="text" data-testid="query-input" name="userInput" onChange={this.handleOnchange}/>
        <ProductList item={this.state.userInput} obj={() => this.handleOnclick()} />
        <button data-testid="query-button" onClick={() => this.handleOnclick()}>search</button>
        <Categories />
        <button>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        
      </div>
    );
  }
}
export default Home;
