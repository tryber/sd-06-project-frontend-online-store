import React from 'react';
import { Redirect } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

class Cards extends React.Component {
  constructor() {
    super();
    this.redirectPage = this.redirectPage.bind(this);
    this.state = { shouldRedirect: false };
  }

  redirectPage() {
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { item } = this.props;

    const { title, thumbnail, price } = item;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to={{
          pathname: "CardDetail",
          state: { product: item }}} />
      );
    }
    
    return (
      <div data-testid="product">
        <div data-testid="product-detail-link" onClick={ this.redirectPage } >
          <img alt="{item.title}" src={ thumbnail } />
          <div>
            <p>{title}</p>
            <p>{`R$ ${(price)}`}</p>
          </div>
        </div>
        <div>
          <AddToCartButton product={ item } testId="product-add-to-cart" />
        </div>
      </div>
    );
  }
}
  
export default Cards;
