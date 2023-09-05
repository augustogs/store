"use client";
import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
}

export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      previousLabel="Anterior"
      nextLabel="Próximo"
    />
  );
}
