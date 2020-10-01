import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import carrinho from '../img/shopping-cart.png';

class CampoBusca extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  render() {
    const { search } = this.state;
    const { onClick } = this.props;
    return (
      <div class="campo-busca">
        <input class="query-input"
          data-testid="query-input"
          type="text"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => onClick({ search }) }
        >
          Pesquisar
        </button>
        <Link to="/CarrinhoDeCompras" data-testid="shopping-cart-button"><img src={ carrinho } class="cart-img" /></Link>
        <p class="home-initial-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

CampoBusca.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CampoBusca;
