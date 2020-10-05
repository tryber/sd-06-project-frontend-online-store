import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaDeProdutos from './Pages/ListaDeProdutos';
import CarrinhoDeCompras from './Pages/CarrinhoDeCompras';
import DetalhesDoProduto from './Pages/DetalhesDoProduto';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListaDeProdutos } />
          <Route path="/CarrinhoDeCompras" component={ CarrinhoDeCompras } />
          <Route path="/DetalhesDoProduto" component={ DetalhesDoProduto } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
