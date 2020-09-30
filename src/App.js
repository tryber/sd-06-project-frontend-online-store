import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagInicial from './PagInicial';
import CarrinhoCompras from './services/CarrinhoCompras';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ PagInicial } />
        <Route path="/CarrinhoCompras" component={ CarrinhoCompras } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
