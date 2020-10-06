import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { items } = this.props;
    const { title, price, thumbnail } = items;
    return (
      <div className="product" data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/products/${items.id}`, state: { items } } }
        >
          <button type="button">Detalhes</button>
        </Link>
        <Link
          to={ { pathname: '/cart', state: { items } } }
        >
          <button data-testid="product-add-to-cart" type="button">Adicionar ao Carrinho</button>
        </Link>
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;
