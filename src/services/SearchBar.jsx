import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';

class SearchBar extends React.Component {
  constructor() {
    super()

    this.handleChanges = this.handleChanges.bind(this);
    this.state = {
      searchbar: '',
    }
  }

  handleChanges({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="search">
        <section className="search-box">
          <label htmlFor="Search" data-testid="home-initial-message" className="search-text">Digite algum termo de pesquisa ou escolha uma categoria.</label>
          <input type="text" name="searchbar" id="Search" value={this.state.searchbar} onChange={this.handleChanges} className="search-input"/>
        </section>
        <section className="shopping-car-button">
          <ShoppingCartButton />
        </section>
      </div>
    )
  }

}

export default SearchBar;
