import React, { Component } from 'react';
import './style/home.css';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchedItems from '../components/SearchedItems';

class Home extends Component {
  constructor() {
    super();

    this.fetchSearchedItem = this.fetchSearchedItem.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchInput: '',
      spanMessage: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      searchedItems: undefined,
    };
  }

  fetchSearchedItem() {
    this.setState(
      async () => {
        const itemToBeSearched = this.state.searchInput;
        const searchResult = await getProductsFromCategoryAndQuery('', itemToBeSearched);

        if (searchResult.results.length !== 0) {
          return this.setState({
            searchedItems: searchResult.results,
            searchInput: '',
            spanMessage: '',
          });
        }

        return this.setState({
          searchedItems: undefined,
          spanMessage: 'Nenhum produto foi encontrado',
        });
      }
    )
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { searchedItems, spanMessage } = this.state;

    return (
      <div className="search-container">
        <input
          name="searchInput" className="search-input" type="text"
          data-testid="query-input" onChange={this.onSearchTextChange}
        />

        <button data-testid="query-button" onClick={this.fetchSearchedItem}>Search</button>

        {searchedItems === undefined ?
          <span data-testid="home-initial-message">{spanMessage}</span> :
          searchedItems.map((item) => <SearchedItems key={item.id} item={item} />)
        }
      </div>
    );
  }
}

export default Home;
