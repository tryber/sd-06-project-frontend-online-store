import React, { Component } from 'react';
import * as Cat from '../services/api';

class Categories extends Component {
    constructor() {
				super();
				this.fetchCategories = this.fetchCategories.bind(this);
        this.state = {
            categories: [],
        }
		}
		componentDidMount() {
			this.fetchCategories()
		}

		async fetchCategories() {
			const result = await Cat.getCategories();
			this.setState({
				categories: result,
			})
			
		}
    render() {
        return (
            <div>
                {this.state.categories.map((cat) => <div data-testid="category" key={cat.id}>{cat.name}</div>)}
            </div>
        );
    }
}

export default Categories;
