import React, { Component } from 'react';
import '../style/SearchBar.css';


class SearchBar extends Component {
  render() {
    const { handleStateChange, fetchCards } = this.props;

    return (
      <section>
        <input name="query" onChange={handleStateChange} data-testid="query-input" className="query" />
        <button onClick={fetchCards} data-testid="query-button" className="StyledButton" style={{
          background: 'linear-gradient(45deg, #0fa36b 30%, #0fa36b 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 25,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          width: '20%',
        }}>Search</button>
      </section>
    );
  }
}

export default SearchBar;
