import React from 'react';

class EmptyProductList extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    )
  }
}

export default EmptyProductList;