import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoriesList from '../components/CategoriesList';


class Home extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <CategoriesList />
      </div>
    )
  }
}

export default Home;