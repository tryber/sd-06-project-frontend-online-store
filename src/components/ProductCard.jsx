import React from 'react';

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <img src={ image } alt="product-img" />
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
