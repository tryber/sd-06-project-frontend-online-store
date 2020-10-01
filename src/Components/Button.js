import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="query-button"
        type="button"
        onClick={ onClick }
      >
        Buscar
      </button>
    );
  }
}

Button.propTypes = { onClick: propTypes.func.isRequired };
