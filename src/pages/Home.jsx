import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories'
import Products from '../components/Products';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      textInput: "", 
      data: null,
    };
  }

  handleEvent({ target }) {
    const query = target.value;
    this.setState({ textInput: query });
  }

  onClick() {
    const query = this.state.textInput;
    if (query !== "") this.fetchProducts({ query });
  }

  async fetchProducts({ categoryId, query }) {
    const fetchData = await api.getProductsFromCategoryAndQuery({ categoryId, query });
    this.setState({ data: fetchData });
  }

  render() {
    const { data, textInput } = this.state;
    return (
      <div>
        <Header
          inputValue={textInput}
          handleEvent={this.handleEvent} 
          onClick={this.onClick}
        />
        <div className="content">
          <Categories />
          <Products data={data}/>
        </div>
      </div>
    );
  }
}

export default Home;