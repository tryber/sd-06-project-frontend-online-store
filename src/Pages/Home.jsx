import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoryList from '../Components/CategoryList';
import ProductList from '../Components/ProductList';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      allCategories: [],
      listagem: '',
      cart: 'Seu carrinho está vazio',
      search: [],
      noCarrinho: 'uma frase empolgada',
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    await api.getCategories()
      .then(response => {
        this.setState({
          allCategories: response,
        });
      });

    await api.getProductsFromCategoryAndQuery()
      .then(response => {
        this.setState({
          allProducts: response,
        });
      })
  }

  async handleSearch(e) {
    const busca = await api.getProductsFromCategoryAndQuery('', e.target.value)
    await this.setState({
      search: busca,
    });
    // await console.log(busca);
  }

  render() {
    return (
      <div className="wrapper">
        <aside>
          <CategoryList categories={ this.state.allCategories } />
        </aside>
        <main>
          <input type="text" placeholder="Busca" onChange={ this.handleSearch } />
          <Link to={ {
            pathname: '/cart',
            state: {
              cart: this.state.cart,
            }
          } } >
            <img src='./tt.jpg' alt="Meu carrinho" />
          </Link>
          {/* { this.state.listagem === '' &&
            this.state.listagem === '' ? (
              this.setState({
                valor: 'Digite algum termo de pesquisa ou escolha uma categoria',
              })
            ) : (
              this.setState({
                valor: 'Digite algum termo de pesquisa ou escolha uma categoria',
              })
            )
          } */}
          <ProductList search={ this.state.search } noCarrinho={ this.state.noCarrinho } />
          {/* < p data-testid="home-initial-message">{ this.state.valor }</p> */ }
        </main>
      </div >
    )
  }
}

export default Home;
