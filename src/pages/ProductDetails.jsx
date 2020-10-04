import React from 'react';
import * as api from '../services/api';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
      thumbnail: '',
      attributes: '',
      loading: true,
      id: props.id,
    }

    this.detailedProduct = this.detailedProduct.bind(this);
  }

  async componentDidMount() {
    const { productId, category, title } = this.props.match.params;
    const productFromId = await api.getProductsFromId(productId);
    const productList = await api.getProductsFromCategoryAndQuery(category, title);
    const productFilter = productList.results.filter(product => product.id === productId)[0];
    const product = productFilter ? productFilter : productFromId;
    const { price, thumbnail, attributes } = product;
    this.setState({
      title: product.title,
      price,
      thumbnail,
      attributes,
      loading: false,
    });
  }

  detailedProduct() {
    const { title, price, thumbnail, attributes } = this.state;
    return (
      <div data-testid="product-detail-link">
        <div data-testid="product-detail-name">{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={`${title}`} />
        {
          attributes.map(({ name, value_name, id }) => {
            return (<p key={`${id}`}>{`${name}: ${value_name}`}</p>);
          })
        }
      </div>
    )
  }

  render() {
    const { loading } = this.state
    return (
      loading
        ? <p>Carregando...</p>
        : <this.detailedProduct />
    )
  }
}
