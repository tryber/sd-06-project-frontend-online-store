import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardCart extends Component {
    render() {
        const { product } = this.props;
        return (
            <ol>
                <img src={product.thumbnail} alt={product.title}/>
                <small data-testid="shopping-cart-product-name">{ product.title}</small>
                <small>{` R$ ${product.price}`}</small>
                <small data-testid="shopping-cart-product-quantity">{ quantity }</small>
            </ol>
        )
    }
}

CardCart.propTypes = { product: PropTypes.shape({}).isRequired }

export default CardCart;