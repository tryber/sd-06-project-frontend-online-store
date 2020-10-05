import React from 'react';
import propTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { onSearchTextChange } = this.props;
    return (
      <div className="search-container">
        <input
          name="searchInput"
          className="search-input"
          type="text"
          data-testid="query-input"
          onChange={ onSearchTextChange }
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  onSearchTextChange: propTypes.func.isRequired,
};

export default SearchInput;
