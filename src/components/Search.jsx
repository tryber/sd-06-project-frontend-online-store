import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.getSearchQuery = this.getSearchQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getSearchQuery({ target }) {
    this.setState({
      searchQuery: target.value,
    });
  }

  handleClick() {
    const { handleChange } = this.props;
    const { searchQuery } = this.state;
    handleChange(searchQuery);
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          <input type="text" data-testid="query-input" onChange={ this.getSearchQuery } />
          <button type="button" data-testid="query-button" onClick={ this.handleClick }> Search </button>
        </div>
      </div>
    );
  }
}

export default Search;
