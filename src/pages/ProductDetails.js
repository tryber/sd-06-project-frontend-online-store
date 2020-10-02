import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import AddToCartButtonDetails from '../components/AddToCartButtonDetails';


class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div>
        <Link to="/carrinho">
          <CartButton />
        </Link>
        <h1>Product details</h1>
        {/* {<span>{console.log(this.props.location.state)}</span>} */}
        <h4 data-testid="product-detail-name">{ product.title }</h4>
        <span>{ `R$ ${product.price}` }</span>
        <img src={ product.thumbnail } alt={ `Foto de: ${product.title}` } />
        <div>
          <ul>
            { product.attributes.map((atributo) => (
              <li
                key={ atributo.name }
              >
                { `${atributo.name}: ${atributo.value_name}` }
              </li>
            ))}
          </ul>
        </div>
        <AddToCartButtonDetails product={ product } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.array,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
