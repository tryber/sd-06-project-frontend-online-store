import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShopList from './services/ShopList';

import './App.css';
// import * as API from './services/api';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ ShopList } />
      </BrowserRouter>
    );
  }
}

export default App;
