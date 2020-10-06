import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      loadMessage: true,
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    const { productsAddToCart } = this.props;
    if (Object.keys(productsAddToCart).length >= 1) {
      this.setState({
        loadMessage: false,
      });
    }
  }

  render() {
    const { loadMessage } = this.state;
    const { productsAddToCart } = this.props;
    const treatedData = Object.entries(productsAddToCart);
    console.log(treatedData);
    return (
      <div>
        {(loadMessage === true
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : treatedData.map((item) => (
            <div key={ item[0] }>
              <p data-testid="shopping-cart-product-name">{item[0]}</p>
              <p data-testid="shopping-cart-product-quantity">{item[1]}</p>
            </div>
          ))
        )}
        <div>
          <Link to="/">Voltar para home</Link>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  productsAddToCart: PropTypes.objectOf(PropTypes.any).isRequired,

};

export default Cart;
