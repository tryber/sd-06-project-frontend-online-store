import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCartImage from './Images/shoppingcart.png';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      cartProducts: [],
      quantityCartProducts: 0,
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    const { location: { state } } = this.props;
    this.setState((prevState) => (
      {
        cartProducts: [state],
        quantityCartProducts: prevState.quantityCartProducts + 1,
      }
    ), () => {
      if (localStorage.Cart) {
        const update = JSON.parse(localStorage.Cart);
        const menosUm = -1;
        const { cartProducts } = this.state;
        const indexCart = update
          .findIndex((item) => item.cartProducts[0].id === cartProducts[0].id);
        if (indexCart !== menosUm) {
          const { quantityCartProducts } = this.state;
          update[indexCart].quantityCartProducts = quantityCartProducts;
          localStorage.Cart = JSON.stringify(update);
        } else {
          localStorage.Cart = JSON.stringify(
            [...JSON.parse(localStorage.Cart), this.state],
          );
        }
      } else {
        localStorage.Cart = JSON.stringify([this.state]);
      }
    });
  }

  render() {
    const { location: { state: { title, thumbnail, price, attributes } } } = this.props;
    const { quantityCartProducts } = this.state;
    return (
      <div>
        <header className="navigation">
          <Link to="/">Voltar</Link>
          <Link
            data-testid="shopping-cart-button"
            to={ { pathname: '/shoppingcart', state: this.state } }
          >
            <img width="30px" src={ shoppingCartImage } alt="Cart" />
            <span>{ quantityCartProducts }</span>
          </Link>
        </header>
        <div className="main-productdetails">
          <div className="left-details">
            <p data-testid="product-detail-name">
              { `${title} - R$ ${price}` }
            </p>
            <img src={ thumbnail } alt={ title } />
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ this.addCart }
            >
              Add to Cart
            </button>
          </div>
          <div>
            <p>Especificações Técnicas</p>
            <ul>
              { attributes.map((attribute) => (
                <li key={ attribute.id }>
                  { `${attribute.name}: ${attribute.value_name}` }
                </li>
              )) }
            </ul>
          </div>
        </div>
        <div>
          <form className="form">
            Avaliações
            <br />
            <input type="text" placeholder="Email" required />
            <input type="number" min={ 0 } max={ 5 } step={ 1 } required />
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
            />
            <button type="button">Avaliar</button>
          </form>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      attributes: PropTypes.arrayOf(String).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
