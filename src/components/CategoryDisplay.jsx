import React from 'react';
import { Component } from 'react';
import * as Api from '../services/api';
import ProductList from './ProductList';

class CategoryDisplay extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryID: '',
            items: [],
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.fetchApi();
        Api.getProductsFromCategoryAndQuery().then((result) => {
            this.setState({
                items: result.results,
            });
        });
    }

    async fetchApi() {
        const getCategories = await Api.getCategories()
        this.setState({
            categories: getCategories,
        });
    }

    handleSelect({ target }) {
        const { id } = target;
        this.setState({ categoryID: id});
    }

    async handleClick(categoryID, query) {
        await Api.getProductsFromCategoryAndQuery(categoryID, query).then((result) => {
            this.setState({ items: result.results});
        })
    }

    render() {
        const { categories, items, categoryID } = this.state;
        const { query } = this.props;
        return (
            <div className="category-field">
                <p>Categorias</p>
                <ul>
                {categories.map(element => (
                    <section key={element.name}>
                        <input key={element.id} name="category" id={element.id} type="radio" data-testid="category" onChange={this.handleSelect} />
                        <label htmlFor="category" key={element.name}>{element.name}</label>
                    </section>
                ))}
                </ul>
                <button
                    type="button"
                    onClick={ () => this.handleClick(categoryID, query) }
                    data-testid="query-button"
                >
                    Buscar
                </button>
                <section className="product-list">
                    <ProductList items={ items } query={ query } />
                </section>
            </div>
        )
    }
}

export default CategoryDisplay;
