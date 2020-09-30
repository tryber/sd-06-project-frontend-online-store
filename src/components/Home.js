import React from 'react';
import imgCart from '../img/imgCart.jpg';

class Home extends React.Component {
  handleClick = () => {
    this.props.history.push("/cart");
  }

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <button data-testid="shopping-cart-button" type="button" onClick={this.handleClick}>
            <img src={ imgCart } alt="shopping-cart-button" width="25" />
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
