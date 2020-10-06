import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  const { onSearchTextSubmit } = props;
  return (
    <div>
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
    </div>
  );
}
SearchBar.propTypes = {
  onSearchTextSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
