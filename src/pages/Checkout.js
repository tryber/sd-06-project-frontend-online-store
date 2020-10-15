import React from 'react';

import ProductRevised from '../components/ProductRevised';

export default function Checkout() {
  const local = JSON.parse(localStorage.cart);
  return (
    <div>
      <ProductRevised local={ local } />
    </div>
  );
}
