import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as Api from '../services/api';
import Product from './Product';

class Home extends React.Component {
  constructor() {
    super();

    this.state ={
      userInput: '',
      product: {},
      shouldRender: false,
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
      product: response,
      shouldRender: true,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          name="userInput"
          onChange={this.handleOnchange}
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="query-button" onClick={this.handleOnclick}>search</button>
        {this.state.shouldRender ? this.state.product.results
          .map(items => <div key={items.id}><Product item={items} /></div>) : ''}
        <Categories />
        <button>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
      </div>
    );
  }
}
export default Home;
