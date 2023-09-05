'use client';
import React from 'react';
import Cart from '../../components/Cart';
import Header from '../../components/Header'

export default function CartPage() {
  return (
    <div>
      <Header onSearch={function (searchTerm: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Cart />
    </div>
  );
};
