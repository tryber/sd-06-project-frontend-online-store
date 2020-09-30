import React from 'react';
import '../styles/Home.css';
import CategoryList from './CategoryList';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message" className="home">
        <div>
          <CategoryList />
        </div>
        <input
          type="text"
          className="home-input"
        />
        <span className="home-span">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
