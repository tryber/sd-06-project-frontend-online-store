import React, { Component } from 'react';
import propTypes from 'prop-types';


class Teste2 extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div>
        <div data-testid="product">
          <h5 data-testid="product-detail-name">{ title }</h5>
          <img src={ thumbnail } alt="fotografia do produto" />
          <span>{`R$: ${price}`}</span>

        </div>
      </div>
    );
  }
}

Teste2.propTypes = {
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }).isRequired,
};

export default Teste2;
