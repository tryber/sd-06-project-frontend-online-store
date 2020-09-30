import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from './../img/cart.png';
import back from './../img/back.png';
import empytCart from './../img/empty-cart.png';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Link to="/"><img src={ back } alt="imagem voltar" width="30px" /></Link>
                <br />
                <Link to="/cart"><img src={ cart } alt="imagem cart" width="30px" /><span>Carrinho de Compras</span></Link>
                <br />
                <div className="empty-cart">
                    <img src={ empytCart } alt="carrinho vazio" width="100px" />
                    <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
