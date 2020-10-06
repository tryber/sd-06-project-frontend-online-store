import React, { Component } from 'react';
import '../style/SearchBar.css';


class SearchBar extends Component {
  render() {
    const { handleStateChange, fetchCards } = this.props;

    return (
      <section>
        <input name="query" onChange={handleStateChange} data-testid="query-input" className="query" />
        <button onClick={fetchCards} data-testid="query-button" className="SearchButton" >Search</button>
      </section>
    );
  }
}

export default SearchBar;
