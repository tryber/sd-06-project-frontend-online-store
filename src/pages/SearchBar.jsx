import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      searchText: '',
    }
  }

  onChangeInput({ target }) {
    const { msgChange } = this.props;
    let myMessage = 'Aguardando consulta...';
    if (target.value === '') {
      myMessage = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    }
    msgChange(myMessage);

    const text = target.value;
    this.setState({ 
      searchText: text,
    });
  }

  render() {
    const { searchText } = this.state;
    const { onFilter } = this.props;
    return (
      <div className="search-bar-div">
        <input type="text" data-testid="query-input" name="query-input" 
          onChange={this.onChangeInput}>
        </input>
        
        <button 
          type="button" data-testid="query-button" className="my-button"
          onClick={() => { if (searchText !== '') onFilter(undefined, searchText)}}
        >Search
        </button>

      </div>
    );
  }
}
  
export default SearchBar;