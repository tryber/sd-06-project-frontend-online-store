import './App.css';
import { getCategories } from './services/api';

function App() {
  return (
    getCategories()
  );
}

export default App;
