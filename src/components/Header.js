import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cart from '../images/shopping-cart.png';
import LogoIcon from '../images/logo-icon.png';
import Logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div>
          <img src={ LogoIcon } alt="logo icon" className="logo-icon" />
          <img src={ Logo } alt="logo icon" className="logo-icon" />
        </div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ Cart } alt="shopping cart" className="shopping-cart" />
        </Link>
      </header>
    );
  }
}

export default Header;
