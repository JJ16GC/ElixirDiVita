// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductPage from "./pages/Product";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import { useCart } from "./components/hooks/useCart";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const { products, handleAddToCart, cartItems } = useCart();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const toggleCartModal = () => setIsCartModalOpen(prevState => !prevState);

  return (
    <Router>
      <Header onCartClick={toggleCartModal} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/productos"
          element={<ProductPage products={products} onAddToCart={handleAddToCart} />}
        />
        <Route path="/carrito" element={<CartModal show={isCartModalOpen} handleClose={toggleCartModal} cartItems={cartItems} />} />
      </Routes>
      <CartModal
        show={isCartModalOpen}
        handleClose={toggleCartModal}
        cartItems={cartItems}
      />
    </Router>
  );
}

export default App;
