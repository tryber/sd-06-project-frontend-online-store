import React, { createElement } from 'react';
import categories from '../__mocks__/categories';
import * as api from './services/api';

class Categories extends React.Component {
	constructor(){
		super()

		function novoLi(params) {
			const li = document.createElement("li");
			const filho = li.innerText(params);
			const lateral = document.getElementsByTagName("aside");
			lateral.appendChild(filho);
		}
	}


	render () {
		return (
			<aside>
				<ul>api.getCategories().then(categories => { novoLi(categories.name) })</ul> 
			</aside>
		);
	};
}
  
export default Categories;