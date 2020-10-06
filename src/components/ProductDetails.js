import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ProductDetails extends Component {
  constructor() {
    super();
    this.getProduct = this.getProduct.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { match: { params: { id } } } = this.props;
    const { products } = this.props;
    const product = products.filter((prod) => prod.id === id)[0];
    this.setState({
      product,
    });
  }

  handleAddClick() {
    const { setProductCart } = this.props;
    const { product: { title, id, price, thumbnail } } = this.state;
    setProductCart(title, id, price, thumbnail);
  }

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          {title}
        </h1>
        <img src={ thumbnail } alt="Imagem do produto" />
        <p>{price}</p>
        <Link to="/CarrinhoCompras">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleAddClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      props: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }).isRequired,
  setProductCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
