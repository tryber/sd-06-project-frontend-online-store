import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import CardList from '../components/CardList';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <SearchBar />
        <Link to="/carrinho">
          <CartButton />
        </Link>
        <CardList />
      </div>
    );
  }
}

export default Home;
