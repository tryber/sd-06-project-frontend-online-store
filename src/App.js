import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagInicial from './PagInicial';
import CarrinhoCompras from './components/CarrinhoCompras';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/ProductDetails/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/CarrinhoCompras" component={ CarrinhoCompras } />
        <Route exact path="/" component={ PagInicial } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
