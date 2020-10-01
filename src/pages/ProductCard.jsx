import React from 'react';
import { Redirect } from 'react-router-dom';

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
        <Redirect to={{ pathname: "/productdatail", state: { product: product }}} />
      );
    }

    return (
      <div data-testid="product" className="product-card" 
        onClick={ this.changeStateRedirect }>
        <div date-testid="product-detail-link">
          <img alt="Product" src={ thumbnail } />
          <div className="product-card-body">
            <p>{title}</p>
            <p>{`R$ ${price}`}</p>
          </div>
        </div>
      </div>
    );
  }
}
  
export default ProductCard;
