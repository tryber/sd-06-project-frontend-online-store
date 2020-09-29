import React from 'react';

class EmptyProductList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="input-initial" ></input>
        <label htmlFor="input-initial" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</label>
      </div>
    )
  }
}

export default EmptyProductList;