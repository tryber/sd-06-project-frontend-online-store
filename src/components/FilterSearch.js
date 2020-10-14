import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterDropdown from './FilterDropdown';

class FilterSearch extends React.Component {
  render() {
    const { filterDropdown, handleFilterDropdown, closeInactiveDropdowns } = this.props;
    return (
      <div className="filter-container">
        <button
          className="button__inSearch filter__button"
          type="button"
          onClick={ () => handleFilterDropdown() }
        >
          <FontAwesomeIcon icon="bars" />
        </button>
        {filterDropdown
        && <FilterDropdown
          filterDropdown={ filterDropdown }
          closeInactiveDropdowns={ closeInactiveDropdowns }
        /> }

      </div>


    );
  }
}

export default FilterSearch;
