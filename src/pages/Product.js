import React from 'react';
import ProductCard from './ProductCard';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }

  render() {
    const { products } = this.state;
    const productsList = [];
    productsList.push(...products.results);

    return (
      <div>
        {productsList.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </div>
    );
  }
}

export default Product;
