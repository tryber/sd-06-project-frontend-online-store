import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import Loading from './Loading';

class RenderProduct extends React.Component {
  render() {
    const { loading, products, addToCart, cartList } = this.props;
    const empty = 0;

    if (loading) {
      return <Loading />;
    } if (products.length > empty) {
      return products.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
          addToCart={ addToCart }
          cartList={ cartList }
        />));
    }
    return (
      <h4 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h4>
    );
  }
}

RenderProduct.propTypes = PropTypes.shape({
  loading: PropTypes.bool,
}).isRequired;

export default RenderProduct;
