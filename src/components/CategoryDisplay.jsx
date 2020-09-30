import React from 'react';
import { Component } from 'react';
import * as Api from '../services/api';

class CategoryDisplay extends Component {
    constructor() {
        super()
        this.state = {
            category: [],
        }
    }

    componentDidMount() {
        this.fetchApi();
    }

    fetchApi = async () => {
        const getCategories = await Api.getCategories()
        .then(response => response);
        this.setState({
            category: getCategories,
        })
    }

    render() {
        const { category } = this.state;
        return (
            <section className="category-field">
                <p>Categorias</p>
                <ul>
                {category.map(category => (
                    <label htmlFor="category">
                        {category.name}
                        <input key={category.id} type="radio" data-testid="category" name="category" />
                    </label>
                ))}
                </ul>
            </section>
        )
    }
}

export default CategoryDisplay;