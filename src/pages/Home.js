import React from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    )
  }
}

export default Home;