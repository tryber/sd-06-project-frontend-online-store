import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((element) => (
          <div data-testid="product" key={ element.id }>
            <p>{element.title}</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>
              R$:
              {element.price}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.objectOf.isRequired,
};
