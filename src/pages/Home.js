import React from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <SearchBar />
        <Link to="/carrinho">
          <CartButton />
        </Link>
      </div>
    );
  }
}

export default Home;
