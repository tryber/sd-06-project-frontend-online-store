import React from 'react';

class ProductCard extends React.Component {
    render() {
      const { title, thumbnail, price } = this.props.product;
      return (
        <div data-testid="product" className="product-card" >
          <img alt="Product" src={ thumbnail } />
          <div className="product-card-body">
            <p>{title}</p>
            <p>{`R$ ${price}`}</p>
          </div>
        </div>
      );
    }
  }
  
  export default ProductCard;
