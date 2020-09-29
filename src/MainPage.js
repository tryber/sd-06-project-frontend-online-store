import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <div className="div-search">
        <input type="text" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default MainPage;
