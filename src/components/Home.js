import React from 'react';
import '../styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message" className="home">
        <input type="text" className="home-input" onKeyUp={(event) => event.keyCode === 13 ? console.log('evento funcionando') : ''}/>
        <span className="home-span">Digite algum termo de pesquisa ou escolha uma categoria.</span>
      </div>
    );
  }
}

export default Home;