import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { items } = this.props;
    if (items === '') return <div>Nenhum produto foi encontrado</div>;
    return (
      <div>
        {console.log(items)}
        {items.map((item) => (
          <ProductCard product={ item } key={ item.id } />
        ))}
      </div>
    );
  }
}

ProductList.defaultProps = { items: [] };
// ProductList.propTypes = { items: PropTypes.arrayOf }
// ProductList.propTypes = { items: PropTypes.arrayOf.isRequired }

export default ProductList;
