import React from 'react';

class Product extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="product-group">
        <div data-testid="product">
          <h4 className="product-title">{data.title}</h4>
          <img src={data.thumbnail} alt={data.title} />
          <div>R$ {data.price}</div>
        </div>
      </div>
    );
  }
}

export default Product;
