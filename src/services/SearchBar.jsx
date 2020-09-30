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
      <div>
        <section>
          <input type="text" name="searchbar" id="Search" value={this.state.searchbar} onChange={this.handleChanges} />
          <label htmlFor="Search" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</label>
        </section>
        <section>
          <ShoppingCartButton />
        </section>
      </div>
    )
  }

}

export default SearchBar;
