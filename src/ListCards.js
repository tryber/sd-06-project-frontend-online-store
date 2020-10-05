import React from 'react';
import StoreProductCard from './StoreProductCard';
import './ListCards.css';

function ListCards(products, handleCart, productsOnCart) {
  return (
    <div className="gallery">
      { products.map((product) => StoreProductCard(product,
        handleCart, productsOnCart)) }
    </div>
  );
}

export default ListCards;
