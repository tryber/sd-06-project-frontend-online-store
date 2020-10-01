import React from 'react';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
    }
  }

  componentWillMount() {
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
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.state;
    return (
      (data) ? this.dataOK(data) : 'Loading...'
    );
  }
}

export default ProductDetails;
