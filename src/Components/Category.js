import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { category, id, onClick } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          name="check"
          type="checkbox"
          data-testid="category"
          id={ id }
          value={ id }
          onClick={ onClick }
        />
        { category }
      </label>
    );
  }
}

Category.propTypes = {
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
