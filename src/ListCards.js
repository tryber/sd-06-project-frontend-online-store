import React from 'react';
import StoreProductCard from './StoreProductCard';

function ListCards(products) {
  return (
    <div>
      { products.map((product) => StoreProductCard(product)) }
    </div>
  );
}

export default ListCards;
