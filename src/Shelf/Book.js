import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Book = props => {
  const [book, setBook] = useState('The Alchemist');
  const updateBook = () => {
    setBook(prevState => {
      return prevState === 'The Alchemist' ? 'Atomic Habits' : 'The Alchemist';
    });
  };
  return (
    <>
      <h2>Book {book}</h2>
      <h2>Props {props.color}</h2>
      <button type="button" onClick={updateBook}>
        Update Book
      </button>
    </>
  );
};

export default Book;
