import React, { Component } from 'react';

class ProductEvaluator extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      texto: '',
    };
    this.eventText = this.eventText.bind(this);
    this.handlerText = this.handlerText.bind(this);
  }

  handlerText() {
    const { email, texto } = this.state;
    const user = document.createElement('span');
    user.innerText = email;
    const textsDiv = document.getElementById('form-text');
    const evaluation = document.createElement('p');
    evaluation.innerText = texto;
    return (
      textsDiv.appendChild(user),
      textsDiv.appendChild(evaluation)
    );
  }

  eventText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, texto } = this.state;
    // const notas = [];
    // for (let i = 1; i < 6; i += 1) notas[i - 1] = i;
    return (
      <div id="form-container">
        <fieldset>
          <form>
            {/* {notas.map((index) => {
              return;
              <input
                type="radio"
                value={ index }
                onClick={ this.eventText }
                name="avaliação"
                key={ index }
              />;
            })} */}
            <input
              type="email"
              placeholder="Email"
              onChange={ this.eventText }
              name="email"
              value={ email }
            />
            <br />
            <textarea
              type="text"
              data-testid="product-detail-evaluation"
              placeholder="Mensagem opcional"
              rows="5"
              onChange={ this.eventText }
              name="texto"
              value={ texto }
            />
            <br />
          </form>
          <div id="form-text" />
          <button onClick={ this.eventText } type="button">Avaliação</button>
        </fieldset>
      </div>
    );
  }
}
export default ProductEvaluator;
