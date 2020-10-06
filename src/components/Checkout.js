import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cartItems: props.cartItems,
      addedItems: props.addedItems,
    };
  }

  render() {
    const { cartItems, addedItems } = this.state;
    let totalPrice = null;
    cartItems.forEach((item) => {
      const { price, id } = item;
      const { quantity } = addedItems[`${id}`];
      totalPrice += quantity * price;
    });
    return (
      <section>
        <div className="checkout-product-checking">
          { cartItems.map((item) => {
            const { id, title, thumbnail, price } = item;
            const quantity = addedItems[`${id}`];

            return (
              <div key={ id } className="checkout-product">
                <img
                  className="checkout-product-image"
                  alt="Product in checkout page"
                  src={ thumbnail }
                />
                <h3 className="checkout-product-title">{ title }</h3>
                <p>{ `x${quantity}` }</p>
                <span>{ price }</span>
              </div>
            );
          }) }
          <span className="checkout-total-price">{ `Total: R$ ${totalPrice}` }</span>
        </div>
        <div>
          <form className="checkout-form">
            <h3>Informações do Comprador</h3>
            <div className="checkout-form-input">
              <label htmlFor="fullname">
                Nome completo
                <input id="fullname" type="text" data-testid="checkout-fullname" />
              </label>
            </div>
            <div className="checkout-form-input">
              <label htmlFor="email">
                E-mail
                <input id="email" type="text" data-testid="checkout-email" />
              </label>
            </div>
            <div className="checkout-form-input">
              <label htmlFor="cpf">
                CPF
                <input id="cpf" type="text" data-testid="checkout-cpf" />
              </label>
            </div>
            <div className="checkout-form-input">
              <label htmlFor="phone">
                Telefone
                <input id="phone" type="text" data-testid="checkout-phone" />
              </label>
            </div>
            <div className="checkout-form-input">
              <label htmlFor="cep">
                CEP
                <input id="cep" type="text" data-testid="checkout-cep" />
              </label>
            </div>
            <div className="checkout-form-input">
              <label htmlFor="address">
                Endereço
                <input id="address" type="text" data-testid="checkout-address" />
              </label>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addedItems: PropTypes.shape().isRequired,
};

export default Checkout;
