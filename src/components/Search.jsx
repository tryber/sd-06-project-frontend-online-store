import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { getSearchQuery } = this.props;
    const { searchQuery } = this.state;

    this.setState({
      searchQuery: target.value,
    });

    getSearchQuery(searchQuery);
  }

  render() {
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />
      </div>
    );
  }
}

export default Search;
