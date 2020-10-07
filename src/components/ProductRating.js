import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

class ProductRating extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h2>Avaliações:</h2>
          <fieldset>
            <input
              type="email"
              placeholder="Email"
            />
            <Rater total={ 5 } rating={ 0 } />
            <br />
            <br />
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              rows="5"
              cols="50"
            />
            <br />
            <br />
            <button type="button">
              Avaliar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProductRating;
