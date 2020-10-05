import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ProductCard extends Component {
  render() {
    const { products, isFail } = this.props;

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
            <Link to={ `/products/${element.id}` } details={ element }>Ver Detalhes</Link>
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
