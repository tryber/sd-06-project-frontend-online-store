/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Produto extends Component {
  render() {
    const { produto } = this.props;
    const { title, price, thumbnail } = produto;
    return (
      <div class="product" data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="foto" />
        <p>R$ { price }</p>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Produto;
