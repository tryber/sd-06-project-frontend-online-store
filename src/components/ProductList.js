import React from 'react';
import PropTypes from 'prop-types';


class ProductList extends React.Component {
  constructor() {
    super();

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(newProduct) {
    const shoppingCart = [];
    const products = JSON.parse(localStorage.getItem('cartProducts'));
    (products) ? shoppingCart.push(...products, newProduct) : shoppingCart.push(newProduct)
    localStorage.setItem('cartProducts', JSON.stringify(shoppingCart));
  }

  render() {
    const { list } = this.props;
    const empty = 0;
    if (list.length === empty) return <p>Nenhum produto foi encontrado</p>;
    return (
      list.map((items) => (
        <div key={ items.id } data-testid="product">
          <h3>{ items.title }</h3>
          <img src={ items.thumbnail } alt="Product" />
          <p>{ `R$ ${items.price}` }</p>
          <button
            data-testid="product-add-to-cart"
            onClick={() => this.handleAddProduct(items)}
          >adicionar ao carrinho
          </button>
        </div>
      ))

    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(Object).isRequired,
};

export default ProductList;
