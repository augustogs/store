'use client';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';
import { useCart } from '../contexts/CartContext';
import { Product } from '../data/ProductData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <div className={styles.productCard}>
      <Link href={`/products/${product.id}`}>
        <img src={product.imageSrc} alt={product.imageAlt} className={styles.productImage} />
      </Link>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}> {product.description}</p>
      <p className={styles.productName}>Preço: R$ {product.price}</p>
      <button className={styles.button} onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
}
