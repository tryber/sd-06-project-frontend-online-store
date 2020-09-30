import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <span>Voltar</span>
                <Link to="/cart">Carrinho</Link>
                <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
            </div>
        );
    }
}

export default ShoppingCart;
