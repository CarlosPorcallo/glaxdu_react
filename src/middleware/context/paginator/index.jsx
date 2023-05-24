import React, { createContext, useState } from 'react';

const PaginatorContext = createContext();

const PaginatorProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const setPage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginatorContext.Provider
      value={{
        currentPage,
        nextPage,
        prevPage,
        setPage,
      }}
    >
      {children}
    </PaginatorContext.Provider>
  );
};

export { PaginatorContext, PaginatorProvider };