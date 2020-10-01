import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../services/CartBtn';

class ProductDetails extends React.Component {
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

  render() {
    const { location: { state: { title, thumbnail, attibutes } } } = this.props;
    return (
      <div>
        <div>
          <div>
            <h1 data-testid="product-detail-name">{title}</h1>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div>
            <p>{ attibutes }</p>
          </div>
        </div>
        <div>
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
};

export default ProductDetails;
