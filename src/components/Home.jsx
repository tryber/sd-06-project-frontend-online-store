import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as Api from '../services/api';
import Product from './Product';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      userInput: '',
      userId: '',
      product: {},
      shouldRender: false,
    }

    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
    this.setId = this.setId.bind(this);
  }

  handleOnchange({ target }) {
    this.setState({
      userInput: target.value,
    });
  }

  setId (id) {
    this.setState({
      userId: id,
    });
  }


  async handleOnclick() {
    const response = await Api.getProductsFromCategoryAndQuery(this.state.userId, this.state.userInput);
    this.setState({
      product: response,
      shouldRender: true,
    });
  }

  render() {
    console.log(this.props.children);
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
        <Categories getId={this.setId} />
        <button>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
      </div>
    );
  }
}
export default Home;
