import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaBoxOpen, FaShoppingCart } from 'react-icons/fa';
import CartProductCard from './CartProductCard';

function ShoppingCart(productsOnCart, handleCart) {
  const msgEmptyCart = 'Seu carrinho está vazio';
  return (
    <div>
      <div>
        <Link to="/"><FaArrowAltCircleLeft /></Link>
        <Link
          data-testid="checkout-products"
          to={ { pathname: '/checkout', state: { productsOnCart } } }
        >
          Ir para checkout
        </Link>
        <div>
          <FaShoppingCart />
          <p>Carrinho de Compras</p>
        </div>
      </div>
      <div>
        { (productsOnCart.length < 1) ? <FaBoxOpen /> : ''}
        { (productsOnCart < 1)
          ? <p>{msgEmptyCart}</p> : '' }
        { productsOnCart.map((product) => CartProductCard(product, handleCart)) }
      </div>
    </div>
  );
}

export default ShoppingCart;
