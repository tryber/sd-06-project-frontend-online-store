import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { category, id } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          name="check"
          type="radio"
          data-testid="category"
          id={ id }
          value={ category }
        />
        { category }
      </label>
    );
  }
}

Category.propTypes = {
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
