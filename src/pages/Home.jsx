import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories'
import Products from '../components/Products';


export default function Home() {
  return (
    <div>
      <Header />
      <div className="content">
        <Categories />
        <Products />
      </div>
    </div>
  );
}
