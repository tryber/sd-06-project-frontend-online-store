import React from 'react';
import PropType from 'prop-types';

class StoreCheckout extends React.Component {
  constructor() {
    super();

    this.saveTotal = this.saveTotal.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    this.state = {
      cartItems,
      total: 0,
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  componentDidMount() {
    const { cartItems, total } = this.state;

    const newTotal = cartItems.reduce((accumulator, current) => {
      const { product, quantity } = current;
      const { price } = product;
      const totalValue = price * quantity;

      return accumulator + totalValue;
    }, total);

    this.saveTotal(newTotal);
  }

  saveTotal(total) {
    this.setState({
      total,
    });
  }

  handleInputValueChange({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  handleCheckout(event) {
    event.preventDefault();

    const { history: { push } } = this.props;

    push('/');
  }

  render() {
    const { cartItems, total, name, cep, cpf, phone, address, email } = this.state;
    return (
      <>
        <h1>Store Checkout</h1>
        <div className="checkout-items">
          {cartItems.map(({ product, quantity }) => (
            <div key={ product.id } className="checkout-item">
              <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            </div>
          ))}
          <p className="checkout-price">
            R$
            {total}
          </p>
        </div>
        <form onSubmit={ this.handleCheckout }>
          <input
            placeholder="Nome Completo"
            required
            data-testid="checkout-fullname"
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => this.handleInputValueChange(target) }
          />
          <input
            placeholder="E-mail"
            required
            data-testid="checkout-email"
            type="text"
            name="email"
            value={ email }
            onChange={ ({ target }) => this.handleInputValueChange(target) }
          />
          <input
            placeholder="CPF"
            required
            data-testid="checkout-cpf"
            type="text"
            name="cpf"
            value={ cpf }
            onChange={ ({ target }) => this.handleInputValueChange(target) }
          />
          <input
            placeholder="Telefone"
            required
            data-testid="checkout-phone"
            type="text"
            name="phone"
            value={ phone }
            onChange={ ({ target }) => this.handleInputValueChange(target) }
          />
          <input
            placeholder="CEP"
            required
            data-testid="checkout-cep"
            type="text"
            name="cep"
            value={ cep }
            onChange={ ({ target }) => this.handleInputValueChange(target) }
          />
          <input
            placeholder="Endereço"
            required
            data-testid="checkout-address"
            type="text"
            name="address"
            value={ address }
            onChange={ ({ target }) => this.handleInputValueChange(target) }
          />
          <div className="checkout-payment">
            <div className="checkout-payment-option">
              <input required type="radio" name="payment" id="bill" />
              <label htmlFor="bill">
                Boleto
                <span />
              </label>
            </div>
            <div className="checkout-payment-option">
              <input required type="radio" name="payment" id="credit-card" />
              <label htmlFor="credit-card">
                Cartão de crédito
                <span />
              </label>
            </div>
            <button type="submit">Pagar!</button>
          </div>
        </form>
      </>
    );
  }
}

StoreCheckout.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};

export default StoreCheckout;
