import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import CartButton from './CartButton';

class ProductDetails extends React.Component {
  constructor(props) {
    super();
    this.dataOK = this.dataOK.bind(this);

  }

  // componentDidMount() {
  //   this.setState({ data: this.getLocalStorageProduct()})
  // }

  // getLocalStorageProduct() {
  //   return JSON.parse(localStorage.getItem('product'));
  // }

  dataOK(data) {
    const { handleCartItems } = this.props;
    return (
      <div className="product-details">
        <img src={data.thumbnail} alt={data.title} />
        <div data-testid="product">
          <h4 className="product-title" data-testid="product-detail-name">{data.title}</h4>
          <div>R$ {data.price}</div>
          <AddCartButton handleCartItems={handleCartItems} bt="productDetails" data={data} />
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