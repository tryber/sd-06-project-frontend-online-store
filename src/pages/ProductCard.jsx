import React from 'react';
import { Redirect } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.changeStateRedirect = this.changeStateRedirect.bind(this);

    this.state = { shouldRedirect: false };
  }

  changeStateRedirect() {
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to={{ pathname: "/productdetail", state: { product: product }}} />
      );
    }
    
    return (
      <div data-testid="product" className="product-card">
        <div data-testid="product-detail-link" onClick={ this.changeStateRedirect } >
          <img alt="Product" src={ thumbnail } />
          <div className="product-card-body">
            <p className="item-cart">{title}</p>
            <p className="item-cart">{`R$ ${(price).toFixed(2)}`}</p>
          </div>
        </div>
        <div>
          <AddToCartButton product={ product } testId="product-add-to-cart" />
        </div>
      </div>
    );
  }
}
  
export default ProductCard;
