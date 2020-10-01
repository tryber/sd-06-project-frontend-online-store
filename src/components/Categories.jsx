import React, { Component } from 'react';
import * as Cat from '../services/api';

class Categories extends Component {
	constructor() {
		super();
		
		this.fetchCategories = this.fetchCategories.bind(this);
		this.getStatusFromCategory = this.getStatusFromCategory.bind(this);

		this.state = {
				categories: [],
				categoryObjList: [],
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

	getStatusFromCategory({target}) {
		this.setState({
			categoryObjList: [...this.state.categoryObjList, {checkStatus: target.checked, categoryID: target.id}]
		})
	}


	render() {
		return (
			<div>
				{this.state.categories.map((cat) => 
				<div>
					<label data-testid="category" key={cat.id}>
						<input type="checkbox" id={cat.id} onChange={this.getStatusFromCategory}/> {cat.name}
					</label>
				</div>
				)}
			</div>
		)}
}

export default Categories
