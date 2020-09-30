import React from 'react';

class ProductCard extends React.Component {
    render() {
      const { title, thumbnail, price } = this.props.product;
      return (
        <div className="product-card" data-testid="product">
          <img alt="Product" src={thumbnail} />
          <div className="product-card-body">
            <h6 >{title}</h6>
            <h6 >{price}</h6>
          </div>
        </div>
      );
    }
  }
  
  export default ProductCard;
