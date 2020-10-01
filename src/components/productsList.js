import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  render() {
    const { products, categoryId } = this.props;
    return (
      <div>
        {products.map((element) => (
          <div data-testid="product" key={ element.id }>
            <p>{element.title}</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>
              $ :
              {element.price}
            </p>
            <Link data-testid="product-detail-link" to={ `/${categoryId}/${element.id}` }>
              <h2>Vejá Mais</h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.objectOf.isRequired,
  categoryId: PropTypes.string.isRequired,
};
