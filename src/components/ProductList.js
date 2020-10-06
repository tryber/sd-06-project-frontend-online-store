import React from 'react';
import PropTypes from 'prop-types';


class ProductList extends React.Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
  }
  
  addProduct() {
    const getObj = this.props.location.state;
    const localStorageLength = localStorage.length;
    localStorage.setItem(localStorageLength, JSON.stringify(getObj));
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
            data-testid="product-detail-add-to-cart"
            onClick={this.addProduct}
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
