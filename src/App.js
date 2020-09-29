import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api'

class App extends React.Component {
  
  componentDidMount() {
    api.getCategories().then(categories => console.log(categories));
  }

  render() {
    return (
      <div className="App">
        Meu APP
      </div>
    );
  }
}

export default App;
