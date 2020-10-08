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
      teste: '',
    }

    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
    this.getObj = this.getObj.bind(this);
    this.fetchApiList = this.fetchApiList.bind(this);
  }

  handleOnchange({ target }) {
    this.setState({
      userInput: target.value,
    });
  }

  async fetchApiList(category, userInput) {
    const response = await Api.getProductsFromCategoryAndQuery(category, userInput);
    return response;
  }

  handleOnclick() {
    this.setState({
      shouldRender: true,
    },async ()=>{
      this.setState({ product: await this.fetchApiList(undefined, this.state.userInput) })
    });
    console.log(this.state.product)
  }

  getObj(obj) {
    this.setState({ product: obj });
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
        {this.state.product.results ? this.state.product.results
          .map(items => <div key={items.id}><Product item={items} /></div>) : ''}
        <Categories getObj={this.getObj} callback={this.fetchApiList} />
        <button>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
      </div>
    );
  }
}
export default Home;
