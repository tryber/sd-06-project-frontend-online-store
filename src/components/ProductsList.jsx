import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart } from '../dados/cart_arrayProductList';


class ProductsList extends Component {
  constructor() {
    super();
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart({ target }) {
    const product = this.props.cards.find(element => element.id === target.id);
    cart.push(product);
  }

  render() {
    const { cards } = this.props;

    if (cards.length === 0) {
      return (
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      );
    }

    return (
      <section>
        {cards.map((product) => {
          const { title, thumbnail, price, id } = product;

          return (
            <div key={id} data-testid="product">
              <Link to={`/details/${id}`} data-testid="product-detail-link" key={id} >
                <section>
                  <p>{title}</p>
                  <img src={thumbnail} alt="" />
                  <p>{`R$${price}`}</p>
                </section>
              </Link>
              <button
                type="button"
                id={id} data-testid="product-add-to-cart"
                onClick={this.handleAddCart}
              >Adicionar ao cart</button>
            </div>
          );
        })};
      </section>
    );
  }
}

export default ProductsList;
