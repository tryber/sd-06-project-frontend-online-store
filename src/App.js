import React from 'react';
import * as api from './services/api';

function App() {
  return (
    api.getCategories().then((categories) => { console.log(categories); })
  );
}

export default App;
