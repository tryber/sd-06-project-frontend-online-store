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
    const { productId } = this.props.match.params;
    const product = await api.getProductsFromId(productId);
    const { title, price, thumbnail, attributes } = product;
    console.log(product)
    this.setState({
      title,
      price,
      thumbnail,
      attributes,
      loading: false,
    });
    console.log(product);
  }

  detailedProduct() {
    const { title, price, thumbnail, attributes } = this.state;
    console.log(this.state);
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
