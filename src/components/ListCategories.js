import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ListCategories extends React.Component {
  constructor() {
    super();
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      categories: await api.getCategories(),
    });
  }

  handleClick({ target }) {
    const { fetchCategory } = this.props;
    fetchCategory(target.id);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((categ) => (
          <div key={ categ.id }>
            <input
              type="radio"
              id={ categ.id }
              name={ categ.id }
              data-testid="category"
              onClick={ (event) => {
                this.handleClick(event);
              } }
            />
            <label htmlFor={ categ.id }>
              { categ.name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

ListCategories.propTypes = {
  fetchCategory: PropTypes.func.isRequired,
};

export default ListCategories;
