import React from 'react';

class ProductList extends React.Component {
  render() {
    const { title, image, price} = this.props;
    return (
      <div data-testid="product">
        <div>
          <p>{ title }</p>
        </div>
        <div>
          <img src={ image } alt="product-img" />
        </div>
        <div>
          <p>{ price }</p>
        </div>
      </div>
    );
  }
}

export default ProductList;
