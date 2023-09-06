import React from "react";
import { products } from '../../data/ProductData';

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
}