import PropTypes from 'prop-types';
import React from 'react';

class ItemCart extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { items } = state;
    const { title, price, thumbnail } = items;

    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

ItemCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default ItemCart;