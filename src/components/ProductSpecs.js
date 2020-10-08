import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductSpecs extends Component {
  render() {
    const { details: { title, thumbnail, price, attributes } } = this.props;
    return (
      <div>
        <h4 data-testid="product-detail-name">
          {title}
        </h4>
        <img src={ thumbnail } alt={ `foto do ${title}` } />
        <p>
          {price}
        </p>
        <div>
          <h5>Especificações técnicas:</h5>
          {attributes.map((element) => (
            <p key={ element.id }>
              { `${element.name}: ` }
              { element.value_name }
            </p>))}
        </div>

      </div>
    );
  }
}

ProductSpecs.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default ProductSpecs;
