import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import CategoryList from './pages/CategoryList';
import * as api from './services/api';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // categoryId: '',
      // query: '',
      // boxCheck: false,
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
  }

  render() {
    const  { categories } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <CategoryList categories={ categories } />
              <ProductList />
            </Route>
            <Route path="/pages/ShoppingCart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
