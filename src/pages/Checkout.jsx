import React from 'react';

export default class Checkout extends React.Component {

  renderUserFields() {
    return (
      <div>
        <h2>Informações do Comprador</h2>
        <input type="text" placeholder="Nome Completo" data-testid="checkout-fullname" />
        <input type="text" placeholder="E-mail" data-testid="checkout-email" />
        <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
        <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
        <input type="text" placeholder="CEP" data-testid="checkout-cep" />
        <input type="text" placeholder="Endereço" data-testid="checkout-address" />
        <button type="submit">Finalizar Compra</button>
      </div>
    );
  }

  render() {
    const { cartProductList } = this.props.location;

    const totalPrice = cartProductList.reduce((acc, curr) => acc + curr.price, 0);
    const numberTwo = 2;
    return (
      <div>
        { cartProductList.map(
          (product) => (
            <p key={ product.id }>
              {product.title}
              R$
              {product.price}
            </p>
          ),
        ) }
        <p>
          Total:
          {totalPrice.toFixed(numberTwo)}
        </p>
        {this.renderUserFields()}
      </div>
    );
  }
}
