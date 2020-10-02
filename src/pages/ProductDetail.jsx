import React from 'react';
import { Link } from 'react-router-dom'
import MyCart from './MyCart';
import AddToCartButton from './AddToCartButton';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      product: undefined,
    }
  }

  componentDidMount(props){
    const product = this.props.location.state.product;
    this.setState({ product })
  }

  showDetails(product) {
    const { title, thumbnail, price } = product;
    return (
      <div>
        <img alt="Product" src={ thumbnail } />
        <div className="product-card-body">
          <h4 data-testid="product-detail-name">{title}</h4>
          <p>{`R$ ${(price).toFixed(2)}`}</p>
          <p></p>
        </div>
        <AddToCartButton product={ product } testId="product-detail-add-to-cart" />
      </div>
    )
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <div className="product-card" >
          {product ? this.showDetails(product) : null}
        </div>

        <MyCart />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ProductDetail;