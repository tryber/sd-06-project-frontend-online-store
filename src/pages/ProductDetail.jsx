import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
<<<<<<< HEAD
=======
  handleClick(productObject) {
    this.props.location.updateCart(productObject);
  }

>>>>>>> 2ad4f7265c26ebfee8ed96cb444f9a6e40080f57
  render() {
    const { title, price, thumbnail, available_quantity } = this.props.location.product;
    return (
      <div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <div className="product-details">
          <div className="product-main">
            <h4 data-testid="product-detail-name">{ title } - R${ price }</h4>
            <img src={ thumbnail } alt="Thumbnail" />
          </div>
          <div>
            <h4>Especificações técnicas</h4>
            <p>Quantidade disponível: { available_quantity }</p>
          </div>
        </div>
<<<<<<< HEAD
=======
        <div>
          <Link
            to={ { pathname: '/',
              product: this.props.location.product
            } }
            data-testid="product-detail-add-to-cart"
          >
            add to cart
          </Link>
        </div>
>>>>>>> 2ad4f7265c26ebfee8ed96cb444f9a6e40080f57
      </div>
    );
  }
}
