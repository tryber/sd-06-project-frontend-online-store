import React, { Component } from 'react';

import ListCategory from '../../components/ListCategory';

import SearchEngine from '../../components/SearchEngine';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <ListCategory />
        <SearchEngine />
      </div>
    );
  }
}

export default Home;
