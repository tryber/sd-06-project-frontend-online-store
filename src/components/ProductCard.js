import React from 'react';

class ProductCard extends React.Component {


  render() {
    const { props } = this.props;
    const { title, price } = props;
    return (
      <div data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
      </div>
    )

  }
}

export default ProductCard;
