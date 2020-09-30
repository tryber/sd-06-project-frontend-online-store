import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagInicial from './PagInicial';
import CarrinhoCompras from './components/CarrinhoCompras';

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
