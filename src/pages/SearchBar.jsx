import React, { Component } from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import * as api from '../services/api';
        
export default class SearchBar extends Component {
  constructor() {
    super()

    this.getTextSearch = this.getTextSearch.bind(this);

    this.state = {
      inputText: '',
      categories: [],
    }
  }
   
  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  getTextSearch({ target }) {
    this.setState({
      inputText: target.value,
    });
  }

  render() {
    const { onClickSearch } = this.props;
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="input-text" data-testid="home-initial-message">
          <button data-testid="query-button" onClick={() => onClickSearch(this.state.inputText)}>Pesquisar</button>
          <input type="text" name="input-text" data-testid="query-input" onChange={this.getTextSearch} />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </label>
      <ShoppingCartButton />
      <ul>
          {categories.map((category) => (
            <li data-testid="category" key={ category.id }>
              {category.name}
            </li>
          ))}
      </ul>  
    </div>
  );
 }
}
