import React from 'react';

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
      <section>
        <input type='text' name='searchbar' value={this.state.searchbar} onChange={this.handleChanges}></input>
        <label data-testid='home-initial-message'>Digite algum termo de pesquisa ou escolha uma categoria.</label>
      </section>
    )
  }

}

export default SearchBar;