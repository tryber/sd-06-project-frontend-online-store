import React from 'react';
import PropTypes from 'prop-types';

import '../styles/SearchEngine.css';

class SearchEngine extends React.Component {
  constructor() {
    super();

    this.state = {
      queryInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { onClick, sendQueryInputToHome } = this.props;
    const { queryInput } = this.state;
    return (
      <div className="search-engine-container">
        <div className="search-engine-top">
          <input
            data-testid="query-input"
            type="text"
            name="queryInput"
            value={ queryInput }
            onChange={ (event) => {
              this.handleChange(event);
              sendQueryInputToHome(queryInput);
            } }
          />
        </div>

        <button
          data-testid="query-button"
          type="button"
          onClick={ () => onClick(this.state) }
          className="search-button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchEngine.propTypes = {
  onClick: PropTypes.func.isRequired,
  sendQueryInputToHome: PropTypes.func.isRequired,
};

export default SearchEngine;
