import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item) => (
          <ProductCard product={ item } key={ item.id } />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = { items: PropTypes.arrayOf.isRequired };

export default ProductList;
