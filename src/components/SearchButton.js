import React from 'react';
import propTypes from 'prop-types';

class SearchButton extends React.Component {
  render() {
    const { fetchSearchedItem } = this.props;
    return (
      <div>
        <button
          data-testid="query-button"
          type="button"
          onClick={ fetchSearchedItem }
        >
          Search
        </button>
      </div>
    );
  }
}

SearchButton.propTypes = {
  fetchSearchedItem: propTypes.func.isRequired,
};

export default SearchButton;
