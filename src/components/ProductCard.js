import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';


class ProductCard extends Component {
  render() {
    const { products, isFail, handleAddCart } = this.props;


    if (isFail) {
      return <span>Nenhum produto foi encontrado</span>;
    }

    return (
      <div>
        {products.map((element) => (
          <div data-testid="product" key={ element.id }>
            <h4>
              {element.title}
            </h4>
            <img src={ element.thumbnail } alt={ `foto do ${element.title}` } />
            <p>
              {element.price}
            </p>
            <Link
              to={ { pathname: `/products/${element.id}`, state: { element } } }
              data-testid="product-detail-link"
            >
              Ver Detalhes
            </Link>
            <AddCartButton handleAddCart={ handleAddCart } element={ element } />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  isFail: PropTypes.bool,
}.isRequired;
