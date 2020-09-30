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
        this.setState({
            category: getCategories,
        })
    }

    render() {
        const { category } = this.state;
        return (
            <div className="category-field">
                <p>Categorias</p>
                {category.map(element => (
                    <ul htmlFor="category" key={element.id} type="radio" data-testid="category">
                        {element.name}
                    </ul>
                ))}
            </div>
        )
    }
}

export default CategoryDisplay;