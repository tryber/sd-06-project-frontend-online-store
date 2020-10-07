import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import Botao from './Botao';


class ProductDetails extends React.Component {
  constructor() {
    super();
    this.addOnClick = this.addOnClick.bind(this);
  }

  addOnClick() {
    const { location: { state: { items, addCart } } } = this.props;
    const { title, id } = items;
    addCart(title, id);
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { items } = state;
    const { title, price, thumbnail } = items;

    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p>Detalhes do Produto</p>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          // onClick={ this.addOnClick }
        >
          Adicionar ao Carrinho
        </button>
        <button type="button">
          <Link to="/">Página inicial</Link>
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      addCart: PropTypes.func.isRequired,
      items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
