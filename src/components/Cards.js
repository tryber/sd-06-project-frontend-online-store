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
    const { item } = this.props;
    const { title, thumbnail, price } = item;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to={{ pathname: "/productdetail", state: { product: product }}} />
      );
    }
    
    return (
      <div data-testid="product">
        <div data-testid="product-detail-link" onClick={ this.changeStateRedirect } >
          <img alt="{item.title}" src={ thumbnail } />
          <div>
            <p>{title}</p>
            <p>{`R$ ${(price).toFixed(2)}`}</p>
          </div>
        </div>
        <div>
          <AddToCartButton product={ item } testId="product-add-to-cart" />
        </div>
      </div>
    );
  }
}
  
export default ProductCard;
