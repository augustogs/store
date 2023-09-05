"use client";

import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import styles from '../styles/ProductList.module.css';
import { useCart } from '../contexts/CartContext';
import { Product } from '../data/ProductData';

interface ProductProps {
  products: Product[];
  itemsPerPage: number;
}

export default function Product({ products, itemsPerPage}: ProductProps) {
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  const updateFilteredProducts = (searchTerm: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    updateFilteredProducts(searchTerm);
  };

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + itemsPerPage);

  return (
    <div className={styles.main}>
      <Header onSearch={handleSearch} />
      <div className={styles.productList}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
