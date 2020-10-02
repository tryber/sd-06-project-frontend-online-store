import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import '../App.css';

class ListaCategorias extends React.Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categoryList: categories,
      });
    });
  }

  render() {
    const { categoryList } = this.state;
    const { categoryFilter } = this.props;
    return (
      <div className="category-list">
        <h3>Categorias:</h3>
        {categoryList.map((category) => (
          <form key={ category.id }>
            <input
              data-testid="category"
              type="checkbox"
              value={ category.id }
              name="category"
              onClick={ (event) => categoryFilter(event) }
            />
            <label htmlFor="category">
              { category.name }
            </label>
          </form>
        ))}
      </div>
    );
  }
}

ListaCategorias.propTypes = { categoryFilter: PropTypes.func.isRequired };

export default ListaCategorias;
