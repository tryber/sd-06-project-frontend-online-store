import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      inputValue: '',
    };
  }


  handleChange({ target }) {
    this.setState({
      inputValue: target.value,
    });
  }

  handleClick(callback) {
    callback(this.state.inputValue);
  }

  render() {
    const { handleButtonClick } = this.props;

    return (
      <section>
        <input onChange={this.handleChange} />
        <button onClick={() => this.handleClick(handleButtonClick)}>Search</button>
      </section>
    );
  }
}

export default SearchBar;
