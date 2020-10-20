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

    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categoryList: categories,
      });
    });
  }

  changeCategory(e) {
    // console.log(e.target.value)
    this.state.categoryList.push(e.target.value);
    this.props.changeSearch(this.state.categoryList);
    console.log(this.state.categoryList);
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div className="category-list">
        <h3>Categorias:</h3>
        {categoryList.map((category) => (
          <form key={ category.id }>
            <input
              id={ category.id }
              data-testid="category"
              type="checkbox"
              value={ category.id }
              name="category"
              onClick={ this.changeCategory }
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </form>
        ))}
      </div>
    );
  }
}

ListaCategorias.propTypes = {
  changeSearch: PropTypes.string.isRequired,
};

export default ListaCategorias;
