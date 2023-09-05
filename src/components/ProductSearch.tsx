'use client';
import React, { useState } from 'react';
import styles from '../styles/ProductSearch.module.css';

interface ProductSearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function ProductSearch({ onSearch }: ProductSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
}
