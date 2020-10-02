import React from 'react';
import StoreProductCard from './StoreProductCard';
import './ListCards.css';

function ListCards(products, handleState, quantityOnCart) {
  return (
    <div className="gallery">
      { products.map((product) => StoreProductCard(product,
        handleState, quantityOnCart)) }
    </div>
  );
}

export default ListCards;
