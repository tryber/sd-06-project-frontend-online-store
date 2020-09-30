import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;
    console.log(typeof (products));
    return (
      <div>
        {products.map((element) => (
          <div data-testid="product" key={ element.id }>
            <p>{element.title}</p>
            <img src={ element.thumbnail } alt={ element.title } />
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.objectOf.isRequired,
};
