import React from 'react';
import PropTypes from 'prop-types';

export default function ProductRevised(props) {
  const { local } = props;
  return (
    <div>
      <h4>Revise seus Produtos</h4>
      {local.map((el) => (
        <section key={ el.id }>
          <img src={ el.thumbnail } alt={ el.id } />
          <p>{ el.title }</p>
          <p>
            Qtd:
            { el.amount }
          </p>
          <p>
            R$:
            { el.price * el.amount }
          </p>
        </section>))}
      <span>
        <b>TOTAL:</b>
        { local.map((el) => el.price * el.amount)
          .reduce((acum, item) => acum + item)}
      </span>
      <section className="identificacao">
        <h4>Informações do Comprador</h4>
        <input type="text" data-testid="checkout-fullname" placeholder="Nome Completo" />
        <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
        <input type="text" data-testid="checkout-email" placeholder="Email" />
        <input type="text" data-testid="checkout-phone" placeholder="Telefone" />
        <input type="text" data-testid="checkout-cep" placeholder="CEP" />
        <input type="text" data-testid="checkout-address" placeholder="Endereço" />
        <input type="text" data-testid="" placeholder="Complemento" />
        <input type="text" data-testid="" placeholder="Numero" />
        <input type="text" data-testid="" placeholder="Cidade" />
        <select>
          <option>Estado</option>
          <option>RO</option>
          <option>AC</option>
          <option>AM</option>
          <option>RR</option>
          <option>PA</option>
          <option>AP</option>
          <option>TO</option>
          <option>MA</option>
          <option>PI</option>
          <option>CE</option>
          <option>RN</option>
          <option>PB</option>
          <option>PE</option>
          <option>AL</option>
          <option>SE</option>
          <option>BA</option>
          <option>MG</option>
          <option>ES</option>
          <option>RJ</option>
          <option>SP</option>
          <option>PR</option>
          <option>SC</option>
          <option>RS</option>
          <option>MS</option>
          <option>MT</option>
          <option>GO</option>
          <option>DF</option>
        </select>
      </section>
      <section className="formPaga">
        <h4>Formas de Pagamento</h4>
        <label htmlFor="boleto">
          Boleto
          <input type="radio" name="formPg" value="Boleto" id="boleto" />
        </label>
        <label htmlFor="visa">
          Visa
          <input type="radio" name="formPg" value="Visa" id="visa" />
        </label>
        <label htmlFor="master">
          MasterCard
          <input type="radio" name="formPg" value="Master" id="master" />
        </label>
        <label htmlFor="elo">
          Elo
          <input type="radio" name="formPg" value="Elo" id="elo" />
        </label>
      </section>
      <button type="button">Comprar</button>
    </div>
  );
}
ProductRevised.propTypes = {
  local: PropTypes.arrayOf(PropTypes.object).isRequired,
};
