import React from 'react';
import { Component } from 'react';
import * as Api from '../services/api';

class CategoryDisplay extends Component {
    constructor() {
        super();
        this.state = {
            category: [],
        };
    }

    componentDidMount() {
        this.fetchApi();
    }

    async fetchApi() {
        const getCategories = await Api.getCategories()
        this.setState({
            category: getCategories,
        });
    }

    render() {
        const { category } = this.state;
        return (
            <div className="category-field">
                <p>Categorias</p>
                <ul>
                {category.map(element => (
                    <section key={element.name}>
                        <input key={element.id} type="checkbox" data-testid="category" />
                        <label htmlFor="category" key={element.name}>{element.name}</label>
                    </section>
                ))}
                </ul>
            </div>
        )
    }
}

export default CategoryDisplay;
