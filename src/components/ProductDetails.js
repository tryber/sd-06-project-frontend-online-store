import React from 'react';
import PropTypes from 'prop-types';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import ShoppingCart from './ShoppingCart';
import Header from './Header';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.handleAPI = this.handleAPI.bind(this);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.handleAPI();
  }

  async handleAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await request.json();
    this.setState({
      product: result,
    });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <Header />
        <div className="product-details">
          <div className="product-info">
            <img alt="Product" src={ thumbnail } className="product-image" />
            <div>
              <h1 data-testid="product-detail-name">{title}</h1>
              <p>{`R$${price}`}</p>
              <button
                data-testid="product-detail-add-to-cart"
                onClick={ () => { ShoppingCart.addProduct(product); } }
                type="button"
              >
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
          <hr />
          <div className="rate-form">
            <h2>Avaliações</h2>
            <form className="rate-message-form">
              <textarea
                data-testid="product-detail-evaluation"
                type="text"
                placeholder=" Mensagem (opcional)"
                className="text-area-form"
              />
              <Rater total={ 5 } rating={ 0 } />
              <button type="button">Avaliar</button>
            </form>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
