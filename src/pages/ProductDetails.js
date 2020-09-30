import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
      <div>
        <h1 data-testid="product-detail-name"></h1>
      </div>
    )
  }
}

export default ProductDetails;
