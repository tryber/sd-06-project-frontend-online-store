import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <input
        id="query-input"
        data-testid="query-input"
        type="text"
        onChange={ onChange }
      />
    );
  }
}

Input.defaultProps = {
  onChange: propTypes.func,
};
Input.propTypes = {
  onChange: propTypes.func,
};
