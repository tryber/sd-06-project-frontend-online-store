
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListaDeProdutos from './Pages/ListaDeProdutos';
import CarrinhoDeCompras from './Pages/CarrinhoDeCompras'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListaDeProdutos } />
          <Route path="/CarrinhoDeCompras" component={ CarrinhoDeCompras } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
