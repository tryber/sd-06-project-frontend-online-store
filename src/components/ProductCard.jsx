import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { details: false }

    this.openDetails = this.openDetails.bind(this);
    this.plainProduct = this.plainProduct.bind(this);
    this.detailedProduct = this.detailedProduct.bind(this);
  }

  detailedProduct() {
    const { title, price, thumbnail, attributes, id } = this.props.product;
    return (
      <div>
        <div>{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={title} />
        <Link to={`/productDetails/${id}`} data-testid="product-detail-link">DETALHES</Link>
        {
          attributes.map(({ name, value_name, id }) => {
            return (<p key={id}>{`${name}: ${value_name}`}</p>);
          })
        }
      </div >
    )
  }

  openDetails() {
    this.setState({ details: true });
  }

  plainProduct() {
    const { title, price, thumbnail, id, } = this.props.product;
    return (
      <div data-testid="product" onClick={this.openDetails}>
        <div>{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={title} />
        <Link to={`/productDetails/${id}`} data-testid="product-detail-link" >DETALHES</Link>
      </div>
    )
  }

  render() {
    const { details } = this.state;
    return (
      details
        ? <this.detailedProduct />
        : <this.plainProduct />
    )
  }
}
