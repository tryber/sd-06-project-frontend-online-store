import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCartButton extends Component {
  render() {
    const { handleAddCart, element } = this.props;
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => handleAddCart(element) }
        >
          Adicionar
        </button>
      </div>
    );
  }
}

AddCartButton.propTypes = {
  handleAddCart: PropTypes.func,
  element: PropTypes.object,
}.isRequired;
