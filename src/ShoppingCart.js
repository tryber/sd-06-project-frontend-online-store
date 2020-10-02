import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaBoxOpen, FaShoppingCart } from 'react-icons/fa';
import CartProductCard from './CartProductCard';

function ShoppingCart(productsOnCart, handleCart) {
  const msgEmptyCart = 'Seu carrinho está vazio';
  const idsOnCart = [];
  productsOnCart.map((product) => {
    const verifyIfAlreadyExists = idsOnCart.includes(product.id);
    if (!verifyIfAlreadyExists) idsOnCart.push(product.id);
    return true;
  });
  return (
    <div>
      <div>
        <Link to="/"><FaArrowAltCircleLeft /></Link>
        <div>
          <FaShoppingCart />
          <p>Carrinho de Compras</p>
        </div>
      </div>
      <div>
        { (productsOnCart.length < 1) ? <FaBoxOpen /> : ''}
        { (productsOnCart < 1)
          ? <p>{msgEmptyCart}</p> : '' }

        { idsOnCart.map((id) => {
          const prodInstances = productsOnCart.filter((product) => product.id === id);
          const quantity = prodInstances.length;
          return CartProductCard(prodInstances[0], quantity, handleCart);
        }) }
      </div>
    </div>
  );
}

export default ShoppingCart;
