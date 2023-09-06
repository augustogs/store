'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.cart}>
      <h2>Carrinho</h2>
        {cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <Image src={item.imageSrc} alt={item.imageAlt} />
                <p>{item.name} - R$ {item.price}</p>
                <p>{item.quantity}</p>
                <div>
                  <button className={styles.incrdecr} onClick={() => decrementQuantity(item.id)}>-</button>
                  <button className={styles.incrdecr}onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className={styles.remove} onClick={() => handleRemoveItem(item.id)}>Remover</button>
              </li>
            ))}
          <li>
            <strong>Total do Carrinho: R$ {calculateTotal().toFixed(2)}</strong>
            <button className={styles.remove} onClick={handleClearCart}>Limpar Carrinho</button>
          </li>
          <button className={styles.button}>Finalizar compra</button>
          </ul>
        )}
      </div>
  );
};
