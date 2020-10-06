import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddItem from '../components/addItem';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.getQuantity = this.getQuantity.bind(this);

    const { location } = this.props;
    const { state } = location;
    const { title: name } = state;

    this.state = {
      title: name,
      quantity: 1,
    };
  }

  componentWillUnmount() {
    const { title, quantity } = this.state;
    AddItem.addItem(title, quantity);
  }

  getQuantity({ target }) {
    const { value } = target;

    this.setState({
      quantity: value,
    });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, thumbnail, price } = state;

    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço:
          {price}
        </p>
        <img src={ thumbnail } alt={ title } />
        <form>
          <label htmlFor="number">
            Quantidade:
            <input type="number" name="number" onChange={ this.getQuantity } />
          </label>
        </form>
        <div>
          <Link
            data-testid="product-detail-add-to-cart"
            to="/"
          >
            ADICIONAR AO CARRINHO
          </Link>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
