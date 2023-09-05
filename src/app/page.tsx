'use client';
import ProductList from '../components/ProductList';
import { useState } from 'react';
import { products } from '../data/ProductData';

export default function HomePage() {
  
  return (
    <div>
      <ProductList products={products} itemsPerPage={3}></ProductList>
    </div>
  );
}
