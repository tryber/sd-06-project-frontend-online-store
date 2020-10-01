import React from 'react';

function SearchBar(props) {
  const { onSearchTextSubmit } = props;

  return (
    <form>
      <input id="search-input" data-testid="query-input" placeholder="Search..." />
      <button
        data-testid="query-button"
        onClick={ onSearchTextSubmit }
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
