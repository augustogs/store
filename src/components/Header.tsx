'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Header.module.css";
import { FiHome } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <FiHome />
            </Link>
          </li>
          <li className={styles.navItem}>
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Pesquisar</button>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart"> 
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
