import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart } from '../dados/cart_arrayProductList';
import BackIcon from '../back.svg';
import '../style/CartCheckout.css';

class CartCheckout extends Component {
  render() {
    let priceTotal = 0;
    return (
      <section>
        <Link to="/cart"><img src={BackIcon} width="30" /></Link>
        <section>
          <h1>Revise seus Produtos</h1>
          <div>
            {cart.map((product) => {
              const { id, thumbnail, title, price, quantity } = product;
              priceTotal += price * quantity;

              return (
                <div key={id}>
                  <img src={thumbnail} />
                  <h2 data-testid="shopping-cart-product-name">{title}</h2>
                  <span>R${price * quantity}</span>
                </div>
              )
            })
            }
          </div>
          <h3>{`Total: R$${priceTotal.toFixed(2)}`}</h3>
        </section>
        <form>
          <section>
            <input className="inputText" type="text" data-testid="checkout-fullname" required placeholder="Nome Completo" name="name" />
            <input className="inputText" type="text" data-testid="checkout-cpf" required placeholder="CPF" name="cpf" />
            <input className="inputText" type="text" data-testid="checkout-email" required placeholder="Email" name="email" />
            <input className="inputText" type="text" data-testid="checkout-phone" required placeholder="Telefone" name="telefone" />
            <input className="inputText" type="text" data-testid="checkout-cep" required placeholder="CEP" name="cep" />
            <input className="inputText" type="text" data-testid="checkout-address" required placeholder="Endereço" name="endereco" />
            <input className="inputText" type="text" data-testid="checkout-complement" required placeholder="Complemento" name="complemento" />
            <input className="inputText" type="text" data-testid="checkout-number" required placeholder="Número" name="numero" />
            <input className="inputText" type="text" data-testid="checkout-city" required placeholder="Cidade" name="cidade" />
            {/* <select>
              <option>Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select> */}
          </section>
          <section>
            <h3>Método de Pagamento</h3>
            <input type="radio" name="payment" value="cartao" /> Cartão
            <input type="radio" name="payment" value="boleto" /> Boleto
            <input type="radio" name="payment" value="deposito" /> Depósito
          </section>
        </form>
        <button type="submit">Comprar</button>
      </section>
    );
  }
}
export default CartCheckout;
