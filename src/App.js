import React from 'react';
import * as api from './services/api';
import './App.css';

function App() {
  return (
    <div>
      {console.log(api.getCategories())}
    </div>
  );
}

export default App;
