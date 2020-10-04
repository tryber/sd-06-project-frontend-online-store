import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();


    this.jogaNoCarrinho = this.jogaNoCarrinho.bind(this);
  }

  jogaNoCarrinho() {
    console.log(this.props)
    this.props.onNameChange('oioioioioioioioioi')

  }

  render() {
    // console.log(this.props.noCarrinho)
    const { title, thumbnail, price } = this.props.product;
    return (
      <div>
        <p>{ title }</p>
        <Link to={ {
          pathname: '/productDetails',
          state: {
            product: this.props.product,
          }
        } }>
          <img src={ thumbnail } />
        </Link>
        <p>{ price }</p>
        <button onClick={ this.jogaNoCarrinho }>Add to cart</button>
      </div>
    )
  }
}

export default ProductCard
