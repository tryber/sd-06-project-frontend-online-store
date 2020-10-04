import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.location.state.product.title }</h1>
        <img src={ this.props.location.state.product.thumbnail } />
        <p>{ this.props.location.state.product.price }</p>
        <Link to="/" >Voltar</Link>
      </div>
    )
  }
}

export default ProductDetails;
