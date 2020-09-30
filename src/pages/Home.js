import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <SearchBar />
        <Link to="/carrinho">
          <CartButton />
          <CategoriesList />
        </Link>
      </div>
    );
  }
}

export default Home;
