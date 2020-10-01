import React from 'react';
import StoreProductCard from './StoreProductCard';
import './ListCards.css';

function ListCards(products, handleState) {
  return (
    <div className="gallery">
      { products.map((product) => StoreProductCard(product, handleState)) }
    </div>
  );
}

export default ListCards;
