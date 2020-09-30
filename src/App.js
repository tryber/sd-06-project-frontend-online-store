import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Category from './Category';

import Search from './components/Search/Search';

function App() {
  return (
    <div className="main-container">
      <Category />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
