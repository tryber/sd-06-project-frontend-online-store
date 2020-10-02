import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { handleStateChange, fetchCards } = this.props;

    return (
      <section>
        <input name="query" onChange={handleStateChange} data-testid="query-input" />
        <button onClick={fetchCards} data-testid="query-button">Search</button>
      </section>
    );
  }
}

export default SearchBar;
