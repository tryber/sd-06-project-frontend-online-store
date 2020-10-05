import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { list } = this.props;
    const empty = 0;
    if (list.length === empty) return <p>Nenhum produto foi encontrado</p>;
    return (
      list.map((items) => (
        <div key={ items.id } data-testid="product">
          <h3>{ items.title }</h3>
          <img src={ items.thumbnail } alt="Product" />
          <p>{ `R$ ${items.price}` }</p>
          <Link data-testid="product-details-link" to="/product-details">Mais detalhes</Link>
        </div>
      ))
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(Object).isRequired,
};

export default ProductList;
