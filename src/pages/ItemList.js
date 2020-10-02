import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListCard from '../components/ListCard';
import ListOfCategories from '../components/ListOfCategories';

class ItemList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.state = {
      clicked: false,
      searchValeu: '',
      categoria: '',
      filterValues: [],
    };
  }

  handleChange(event) {
    this.setState({
      searchValeu: event.target.value,
    });
  }

  async handleSelectOption(categorySelected) {
    this.setState(({ categoria: categorySelected }));
    this.handleClick();
  }

  async handleClick() {
    const { categoria, searchValeu } = this.state;
    const searchedItens = await getProductsFromCategoryAndQuery(categoria, searchValeu);
    this.setState({
      clicked: true,
      filterValues: searchedItens.results,
    });
  }

  render() {
    const { searchValeu, filterValues, clicked } = this.state;
    return (
      <div>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <input
          name="searchValeu"
          value={ searchValeu }
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          SEARCH
        </button>
        { clicked ? filterValues
          .map((iten) => <ListCard key={ iten.title } iten={ iten } />) : '' }
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <ListOfCategories handleSelectOption={ this.handleSelectOption } />
      </div>
    );
  }
}

export default ItemList;
