import React from 'react';
import StoreProductCard from './StoreProductCard';
import './ListCards.css';

function ListCards(products) {
  return (
    <div className="gallery">
      { products.map((product) => StoreProductCard(product)) }
    </div>
  );
}

export default ListCards;
