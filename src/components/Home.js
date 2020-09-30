import React from 'react';
import PropTypes from 'prop-types';
import imgCart from '../img/imgCart.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/cart');
  }

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <button
            data-testid="shopping-cart-button"
            type="button"
            onClick={ this.handleClick }
          >
            <img src={ imgCart } alt="shopping-cart-button" width="25" />
          </button>
        </div>
      </div>
    );
  }
}

Home.propTypes = { history: PropTypes.shape({
  push: PropTypes.func.isRequired,
}).isRequired };

export default Home;
