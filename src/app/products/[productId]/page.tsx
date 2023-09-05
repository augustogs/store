'use client';
import React from "react";
import Header from "../../../components/Header";
import { products } from '../../../data/ProductData';
import { useCart } from '../../../contexts/CartContext';
import styles from '../../../styles/ProductDetail.module.css';

export default function ProductDetail({
  params,
}: {
  params: { productId: number };
}) {
  const product = products.find(
    (product) => product.id == params.productId
  );

  const { addToCart } = useCart();

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <><Header onSearch={function (searchTerm: string): void {
      throw new Error("Function not implemented.");
    } } />
    <div className={styles["product-detail-container"]}>
      <h1 className={styles["product-name"]}>{product.name}</h1>
      <h3 className={styles["product-description"]}>{product.description}</h3>
      <p className={styles["product-price"]}>Preço: R${product.price}</p>
      <img
        className={styles["product-image"]}
        src={product.imageSrc}
        alt={product.imageAlt}
        />
      <button className={styles.button} onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div></>
  );
}