import React, { Component } from 'react';

class homeList extends Component {
    render() {
        return(
            <div>
                <label>Digite Aqui
                  <input></input> 
                </label>
                <h1 data-testid='home-initial-message'>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
            </div>
        )
    }
}

export default homeList;
