import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <Link to="/carrinho">
          <CartButton />
        </Link>
        <h1>Product details</h1>
        <span>{console.log(this.props.location.state)}</span>
        <h4 data-testid="product-detail-name">{product.title}</h4>
        <span>{`R$ ${product.price}`}</span>
        <img src={product.thumbnail} alt={`Foto de: ${product.title}`} />
        <div>
          <ul>
            {product.attributes.map((atributo) => (
              <li key={atributo.name}>{`${atributo.name}: ${atributo.value_name}`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
