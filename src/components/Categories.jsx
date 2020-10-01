import React, { Component } from 'react';
import * as Cat from '../services/api';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.fetchCategories = this.fetchCategories.bind(this);
		this.isChecked = this.isChecked.bind(this);
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



	isChecked({ target }) {
		this.props.getId(target.id);
	};


	render() {
		return (
			<div>
				{this.state.categories.map((cat) =>
					<div data-testid="category" key={cat.id}>
						<label htmlFor="get-input">
							<input type="radio" id={cat.id} onChange={this.isChecked} name="get-input" />{cat.name}
						</label>
					</div>)}
			</div>
		);
	}
}

export default Categories;
