import React, { Component, Fragment } from 'react';
import * as api from '../services/api'
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    const categoriesObjects = await api.getCategories();
    const categories = categoriesObjects.map(category => category.name);
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <Fragment>
        <section>
          { 
            categories.map(category => {
              return (
                <label htmlFor="category" data-testid="category" key={category}>
                  <input type="radio" name="category" />
                  { category }
                </label>
              );
            })
          }
        </section>
        <main>
          <label htmlFor="search-input" data-testid="home-initial-message">
            <input id="search-input" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </main>
      </Fragment>
    );
  }
}

