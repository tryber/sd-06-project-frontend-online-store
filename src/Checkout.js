import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h2>Revise seus Produtos</h2>
        </div>
        <form>
          <label htmlFor="nome">
            Informações do comprador
            <input
              name="nome"
              data-testid="checkout-fullname"
              isrequired="true"
              placeholder="Nome completo"
              onChange={ this.handleChange }
            />
            <input
              name="cpf"
              data-testid="checkout-cpf"
              isrequired="true"
              placeholder="CPF"
            />
            <input
              name="email"
              data-testid="checkout-email"
              isrequired="true"
              placeholder="Email"
            />
            <input
              name="telefone"
              data-testid="checkout-phone"
              isrequired="true"
              placeholder="Telefone"
            />
            <br />
            <input
              name="cep"
              data-testid="checkout-cep"
              isrequired="true"
              placeholder="CEP"
            />
            <input
              name="endereco"
              data-testid="checkout-address"
              isrequired="true"
              placeholder="Endereço"
            />
            <br />
            <input
              name="complemento"
              isrequired="true"
              placeholder="Complemento"
            />
            <input
              name="numero"
              isrequired="true"
              placeholder="Número"
            />
            <input
              name="cidade"
              isrequired="true"
              placeholder="Cidade"
            />
            <input
              name="estado"
              isrequired="true"
              placeholder="Estado"
            />
          </label>

          <button
            type="button"
            className="buy-button"
            data-testid="checkout-products"
          >
            Comprar
          </button>

        </form>
      </main>
    );
  }
}

export default Checkout;
