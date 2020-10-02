import React from 'react';
import StoreProductCard from './StoreProductCard';
import './ListCards.css';

function ListCards(products, handleCart) {
  return (
    <div className="gallery">
      { products.map((product) => StoreProductCard(product,
        handleCart)) }
    </div>
  );
}

export default ListCards;
