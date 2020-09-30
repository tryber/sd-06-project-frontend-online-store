import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
// import { Link } from 'react-router-dom';

class ProductList extends React.Component {

  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click() {
    console.log("entrou", this.props.match);
  }

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
