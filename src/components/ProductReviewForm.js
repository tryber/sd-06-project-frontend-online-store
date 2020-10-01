import React from 'react';
import './style_sheets/ProductReviewForm.css';
import StarRating from './StarRating';

class ProductReviewForm extends React.Component {
  render() {
    return (
      <form>
        <h3>Avaliações</h3>
        <fieldset>
          <legend>Avalie!</legend>
          <section className="form-input-section">
            <div className="email-and-stars">
              <input
                id="email"
                type="text"
                placeholder="E-mail"
                className="form-inputs"
              />
              <StarRating />
            </div>
            <textarea id="message" placeholder="Mensagem (opcional" />
          </section>
        </fieldset>
      </form>
    );
  }
}

export default ProductReviewForm;
