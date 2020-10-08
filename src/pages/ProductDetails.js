import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShoppingCart } from '../components';
import returnArrow from '../images/return-arrow.png';
import '../App.css';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.setInitialState = this.setInitialState.bind(this);

    this.state = {
      totalItems: 0,
    };
  }

  componentDidMount() {
    this.setInitialState();
  }

  setInitialState() {
    const { location } = this.props;
    const { totalItems: items } = location;
    this.setState({ totalItems: items });
  }

  handleClick() {
    this.setState((state) => ({
      totalItems: state.totalItems + 1,
    }));
    const { location } = this.props;
    const { addFromDetails, product } = location;
    addFromDetails(product, false);
  }

  render() {
    const { totalItems } = this.state;
    const { location } = this.props;
    const { product } = location;
    if (product) {
      const { title, thumbnail, price } = product;
      return (
        <div>
          <Link
            to={ {
              pathname: '/',
              totalFromDetails: totalItems,
            } }
          >
            <img src={ returnArrow } alt="retornar" height="50" />
          </Link>
          <ShoppingCart totalItems={ totalItems } />
          <h3 data-testid="product-detail-name">{ title }</h3>
          <img src={ thumbnail } alt="produto" />
          <p>{`Preço: R$ ${price}`}</p>
          <button
            type="button"
            className="add-to-cart-button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleClick() }
          >
            Adicionar ao carrinho
          </button>
          <div>
            <h4>Avaliação do Produto:</h4>
            <textarea
              className="evaluation-textarea"
              data-testid="product-detail-evaluation"
              rows="10"
              columns="500"
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">
          <img src={ returnArrow } alt="retornar" height="50" />
        </Link>
        <p>Error</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.shape(),
  product: PropTypes.shape(),
};

ProductDetails.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
  location: {},
  product: {},
};

export default ProductDetails;
