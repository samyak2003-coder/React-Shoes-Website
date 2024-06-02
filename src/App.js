// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductView from './ProductView';
import Cart from './Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
