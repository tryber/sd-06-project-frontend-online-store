import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import CartButton from './CartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.dataOK = this.dataOK.bind(this);
  }

  dataOK(data) {
    const { handleCartItems } = this.props;
    return (
      <div className="product-details">
        <div data-testid="product">
          <h4 className="product-title" data-testid="product-detail-name">{data.title}</h4>
          <img src={data.thumbnail} alt={data.title} />
          <div>R$ {data.price}</div>
          <AddCartButton handleCartItems={handleCartItems} bt="home" data={data} />
          <AddCartButton handleCartItems={handleCartItems} bt="cart" showBtRemove={false} data={data} />
        </div>
      </div>
    );
  }

  render() {
    const { productDetails } = this.props;
    return (
      <div>
        <Link to="/">Voltar para a Home</Link>
        <CartButton />
        {(productDetails) ? this.dataOK(productDetails) : 'Loading...'}
      </div>
    );
  }
}

export default ProductDetails;