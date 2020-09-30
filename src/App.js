import React from 'react';

import ListCategory from './components/ListCategory';

import './App.css';

import SearchEngine from './pages/SearchEngine';

function App() {
  return (
    <div className="App">
      <SearchEngine />
      <ListCategory />
    </div>
  );
}

export default App;
