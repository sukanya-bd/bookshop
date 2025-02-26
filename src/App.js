import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Book from './Shelf/Book';
import Row from './Shelf/Row';
import PasswordValidator from './password-validator/PasswordValidator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Row" element={<Row />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
