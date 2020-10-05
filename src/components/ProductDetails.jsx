import React from 'react';
import { getProductsId } from '../services/api';

class ProductDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			product: '',
		};

		this.getId = this.getId.bind(this);
	}
	
	componentDidMount() {
		this.getId();
	}

	async getId() {
		const { id } = this.props.match.params;
		const resultado = await getProductsId(id);
		this.setState({ product: resultado });
	}
	
	render() {
		const { product } = this.state;
		return (
			<div>
				<h1 data-testid="product-detail-name">{product.title}</h1>
				<h2>{product.id}</h2>
				<p>{product.price}</p>
			</div>
		);
	}
}

export default ProductDetails;
