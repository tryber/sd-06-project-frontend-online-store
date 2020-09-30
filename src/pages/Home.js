import React, { Component } from 'react';

import ListCategory from '../components/ListCategory';

import SearchEngine from './SearchEngine';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchEngine />
        <ListCategory />
      </div>
    );
  }
}

export default Home;
