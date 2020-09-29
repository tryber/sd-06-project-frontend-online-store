import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <label >
          <input type="text" />
        </label>
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      </div>
    )
  }
}

export default HomePage;
