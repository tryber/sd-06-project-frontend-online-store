import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      loadMessage: true,
    };
  }

  componentDidMount() {
    const { location: { state: { data } } } = this.props;
    if (data !== undefined) {
      this.setState({
        loadMessage: false,
      });
    }
  }

  render() {
    const { loadMessage } = this.state;
    const { location: { state: { data } } } = this.props;
    const treatedData = Object.entries(data);
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
};

export default Cart;
