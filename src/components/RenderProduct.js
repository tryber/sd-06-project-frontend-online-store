import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import Loading from './Loading';

class RenderProduct extends React.Component {
  render() {
    const { loading, products } = this.props;
    const empty = 0;

    if (loading) {
      return <Loading />;
    } if (products.length > empty) {
      return products.map((product) => (
        <ProductCard
          key={ product.id }
          props={ product }
        />));
    }
    return <span>Faça uma busca ou selecione uma categoria.</span>;
  }
}

RenderProduct.propTypes = PropTypes.shape({
  loading: PropTypes.bool,
}).isRequired;

export default RenderProduct;
