import React, { Component } from "react";
import { Link } from "react-router-dom";
import CampoBusca from "../Components/CampoBusca";
import ListaCategorias from "../Components/ListaCategorias";
import Produto from "../Components/Produto";
import * as Api from "../services/api";
import carrinho from "../img/shopping-cart.png";
import "../App.css";

// eslint-disable-next-line react/prefer-stateless-function
class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      produtos: '',
      categoryId: "",
      produtosNoCarrinho: [],
      search: '',
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  categoryFilter({ target }) {
    const { value } = target;
    this.setState({ categoryId: value }, () => this.fetchAPI());
  }

  async changeSearch(prop) {
    await this.setState({
      search: prop,
    })
    await this.fetchAPI();
  }

  async fetchAPI() {
    const { categoryId, search } = this.state;
    const response = await Api.getProductsFromCategoryAndQuery(
      categoryId,
      search
    );
    
    const { results } = await response;
    await this.setState({
      produtos: results,
    });
  }

  addToCart(produto) {
    this.state.produtosNoCarrinho.push(produto);
  }

  render() {
    const { produtos, search } = this.state;
    const zero = 0;
    // console.log(search === '')
    return (

      <div className='wrapper'>
        <aside>
          <ListaCategorias changeSearch={ this.changeSearch } />
        </aside>
        <main>
          <CampoBusca changeSearch={ this.changeSearch } />
          <div class="cart-img-div">
            <Link data-testid="shopping-cart-button" to={ {
              pathname: "/CarrinhoDeCompras",
              state: {
                produtosNoCarrinho: this.state.produtosNoCarrinho,
              }
            } } >
              <img src={ carrinho } className="cart-img" alt="ícone carrinho" />
            </Link>
          </div>
          <ul class="listagem">
            { search === '' ? (
              <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
            ) : (
                (produtos.length === zero ? (
                  <p>Nenhum produto foi encontrado</p>
                ) : (
                    produtos.map((produto) => (
                      <Produto
                        key={ produto.id }
                        produto={ produto }
                        addToCart={ this.addToCart }
                      />
                    ))
                  ))
              ) }
          </ul>
        </main>
      </div>
    );
  }
}

export default ListaDeProdutos;
// Iniciar requsito 10