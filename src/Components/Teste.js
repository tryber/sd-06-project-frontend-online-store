import React, { Component } from 'react';

import Teste2 from './Teste2';

class Teste extends Component {

  render() {
    const { ship } = this.props.match.params;
    const { busca } = this.props.location.state
    const arr = busca.filter((num) => num.id === ship)
    console.log(arr);
    return (
      <div>
        {arr.map((item) => <Teste2 product={ item } key={ item.id } />)}
      </div>
    );
  }
}

export default Teste;
