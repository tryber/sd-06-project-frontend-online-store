import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListCategories from './components/ListCategories';
import CardsContainer from './components/CardsContainer';
import CartItems from './components/CartItems';
import cart from './img/cart-image.png';

class PagInicial extends Component {
  render() {
    const {
      fetchCategory,
      products,
      setProductCart,
      productCart,
      countProducts,
      fetchApi,
      setValue,
      value } = this.props;
    const idInput = 'query-input';
    return (
      <div data-testid="home-initial-message">
        <form>
          <label htmlFor={ idInput }>
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              data-testid="query-input"
              name="user-input"
              id={ idInput }
              type="text"
              onChange={ setValue }
              value={ value }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ (event) => {
              fetchApi();
              event.preventDefault();
            } }
          >
            Pesquisar
          </button>
        </form>
        <section>
          <Link to={ { pathname: '/CarrinhoCompras', state: { props: 'test' } } }>
            <img
              data-testid="shopping-cart-button"
              src={ cart }
              alt="test"
              width="80px"
            />
          </Link>
          <div>
            <CartItems productCart={ productCart } countProducts={ countProducts } />
          </div>
        </section>
        <section>
          <ListCategories fetchCategory={ fetchCategory } />
        </section>
        <section>
          <CardsContainer setProductCart={ setProductCart } products={ products } />
        </section>
      </div>
    );
  }
}

PagInicial.propTypes = {
  productCart: PropTypes.arrayOf.isRequired,
  countProducts: PropTypes.string.isRequired,
  fetchCategory: PropTypes.func.isRequired,
  setProductCart: PropTypes.func.isRequired,
  fetchApi: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  products: PropTypes.arrayOf.isRequired,
};

export default PagInicial;
