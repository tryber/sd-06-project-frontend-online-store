import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListCategories from './components/ListCategories';
import CardsContainer from './components/CardsContainer';
import CartItems from './components/CartItems';
import cart from './img/cart-image.png';

class PagInicial extends Component {
  increaseProduct(productId) {
    const { productCart } = this.state;
    productCart.forEach((productList) => {
      if (productList.id === productId) {
        const beforeState = productList.countTotal;
        productList.countTotal = beforeState + 1;
      }
    });
  }

  render() {
    const {
      fetchCategory,
      products,
      setProductCart,
      productCart,
      countProducts,
      fetchApi,
      setValue,
      value,
    } = this.props;
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
        <section data-testid="shopping-cart-button">
          <Link to={ { pathname: '/CarrinhoCompras', state: { props: 'test' } } }>
            <img
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
  fetchCategory: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductCart: PropTypes.func.isRequired,
  productCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  countProducts: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PagInicial;
