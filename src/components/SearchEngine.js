import React from 'react';
import PropTypes from 'prop-types';

import ShoppingCartButton from './ShoppingCartButton';

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
    // had to do this to bypass lint rule (no-magic-number).. go figure..
    return (
      <div>
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
        <ShoppingCartButton />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => onClick(this.state) }
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
