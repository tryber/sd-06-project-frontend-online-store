import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}
export default App;
