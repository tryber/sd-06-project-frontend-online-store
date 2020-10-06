import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../services/CartBtn';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.addCart = this.addCart.bind(this);
  }


  saveEvaluation() {
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;
    const evaluation = {
      email,
      rating,
      message,
    };
    const evaluationString = JSON.stringify(evaluation);
    localStorage.setItem('evaluations', [evaluationString]);
  }

  addCart(id, title) {
    let cart = localStorage.getItem('cart');

    if (!cart) { cart = {}; } else { cart = JSON.parse(cart); }

    const qtd = cart[id];
    const itemCard = [qtd, title];


    if (itemCard.qtd) { return itemCard.qtd + 1; } itemCard.qtd = 1;


    cart[id] = itemCard;
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }

  render() {
    const { location: { state: product } } = this.props;
    const { addToCart } = this.props;

    console.log(product);

    return (
      <div>
        <div>
          <div>
            <h1 data-testid="product-detail-name">{ product.title }</h1>
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div>
            <p>{ product.attibutes }</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-car
          t"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao Carrinho
          </button>
          <CartBtn />
        </div>
        <form>
          <input type="text" placeholder="Coloque seu email" id="email" required />
          <br />
          <label htmlFor="rating">
            Avaliação:
            <input type="number" min={ 0 } max={ 5 } step={ 1 } id="rating" required />
            <br />
          </label>
          <textarea
            id="message"
            data-testeid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
          />
          <br />
          <button
            type="button"
            onClick={ this.saveEvaluation }
          >
            Submeter avaliação
          </button>
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      attibutes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
