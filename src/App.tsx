import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductPage from "./pages/Product";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import { useCart } from "./components/hooks/useCart";
import Modal from "react-modal";
import CRUD_Products from "./pages/FormProducts";
import '../src/App.css';

Modal.setAppElement("#root");

function App() {
  const { products, handleAddToCart, cartItems, updateCart, removeProduct } = useCart();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const toggleCartModal = () => setIsCartModalOpen(prevState => !prevState);

  const handleIncreaseQuantity = (id: string) => {
    updateCart(id, 1); // Incrementar cantidad
  };

  const handleDecreaseQuantity = (id: string) => {
    updateCart(id, -1); // Decrementar cantidad
  };

  return (
    <Router>
      <Header onCartClick={toggleCartModal} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/productos" element={<ProductPage products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/registro" element={<CRUD_Products />} />
      </Routes>
      <CartModal
        show={isCartModalOpen}
        handleClose={toggleCartModal}
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveProduct={removeProduct}
      />
    </Router>
  );
}

export default App;
