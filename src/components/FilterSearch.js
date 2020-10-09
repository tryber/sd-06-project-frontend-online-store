import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
  }

  handleClickIcon() {
    const { showDropDown } = this.state;
    this.setState({ showDropDown: !showDropDown });
  }


  render() {
    const { showDropDown } = this.state;
    return (
      <div className="filter-container">
        <button
          className="button__inSearch filter__button"
          type="button"
          onClick={ () => this.handleClickIcon() }
        >
          <FontAwesomeIcon icon="bars" />
        </button>
        <div
          className={ showDropDown ? 'dropdown-active' : 'filter__dropdown' }


        >
          <p className="item">first</p>
          <p className="item">second</p>
        </div>

      </div>


    );
  }
}

export default FilterSearch;
