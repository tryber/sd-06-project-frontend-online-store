import React from 'react';
import { Link } from 'react-router-dom'
import MyCart from './MyCart';

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
          <p date-testid="product-detail-name">{title}</p>
          <p>{`R$ ${price}`}</p>
          <p></p>
        </div>
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