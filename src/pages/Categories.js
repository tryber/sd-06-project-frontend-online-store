import React from 'react';
import * as api from '../services/api';
import categories from '../__mocks__/categories';

class Categories extends React.Component {
	constructor() {
		super()
		this.state = {
			categories: '',
		}
	}
	componentDidMount() {
		api.getCategories().then(categories => { this.setState({categories}) })
	}

	render () {
		return (
			<aside>
				<input type="checkbox"></input>
				<label></label>
			</aside>
		);
	};
}
  
export default Categories;