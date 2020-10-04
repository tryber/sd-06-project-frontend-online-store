import React, { Component } from 'react';
import CampoBusca from '../Components/CampoBusca';
import ListaCategorias from '../Components/ListaCategorias';
import Produto from '../Components/Produto';
import * as Api from '../services/api';
import carrinho from '../img/shopping-cart.png';
import '../App.css';


// eslint-disable-next-line react/prefer-stateless-function
class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      categoryId: '',
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
  }

  categoryFilter({ target }) {
    const { value } = target;
    this.setState({ categoryId: value }, () => this.fetchAPI());
  }

  handleClick(props) {
    this.fetchAPI(props);
  }

  async fetchAPI() {
    const { categoryId, search } = this.state;
    const response = await Api.getProductsFromCategoryAndQuery(
      categoryId,
      search,
    );
    const { results } = response;
    this.setState({
      produtos: results,
    });
  }

  render() {
    const { produtos } = this.state;
    const zero = 0;
    return (
      <div class="wrapper">
        <ListaCategorias categoryFilter={ this.categoryFilter } />
        <main>
        <CampoBusca onClick={ this.handleClick } />
        <ul>
          { produtos.length === zero ? (
            <p>Nenhum produto foi encontrado</p>
          ) : (
              produtos.map((produto) => (
                <Link data-testid="product-detail-link" to={ {
                  pathname: "/DetalhesDoProduto",
                  state: { produto: produto },
                } }>
                  <Produto key={ produto.id } produto={ produto } />
                </Link>
              ))
            ) }
        </ul>
        <Link to="/CarrinhoDeCompras" data-testid="shopping-cart-button">
          <img src={ carrinho } className="cart-img" alt="ícone carrinho" />
        </Link>
        </main>
      </div >
    );
  }
}

export default ListaDeProdutos;
