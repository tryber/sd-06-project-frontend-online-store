import React from 'react';
import AddCartButton from './AddCartButton';
import CartButton from './CartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    this.setState({ data: this.getLocalStorageProduct()})
  }

  getLocalStorageProduct() {
    return JSON.parse(localStorage.getItem('product'));
  }

  dataOK = (data) => {
    return (
      <div className="product-details">
        <img src={data.thumbnail} alt={data.title} />
        <div data-testid="product">
          <h4 className="product-title" data-testid="product-detail-name">{data.title}</h4>
          <div>R$ {data.price}</div>
          <AddCartButton bt="productDetails" data={data} />
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <CartButton />
        {(data) ? this.dataOK(data) : 'Loading...'}
      </div>
    );
  }
}

export default ProductDetails;