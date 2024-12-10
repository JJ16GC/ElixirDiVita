import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import { useCart } from "./components/hooks/useCart";
import Modal from "react-modal";
import '../src/styles/global.css';
import Loading from "./components/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingButton from "./components/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

Modal.setAppElement("#root");

// Usar React.lazy para carga dinámica de componentes
const HomePage = lazy(() => import('./pages/Home'));
const AboutMePage = lazy(() => import('./pages/AboutMe'));
const About = lazy(() => import('./pages/About'));
const ProductPage = lazy(() => import('./pages/Product'));
const CRUD_Products = lazy(() => import('./pages/FormProducts'));

const handleButtonClick = () => {
  const message = encodeURIComponent("“¡Hola! ¿Podrías darme más información sobre los productos que tienen disponibles? ¡Gracias!”");
  const phoneNumber = '3173807044'; // Reemplaza con el número de teléfono
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};

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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos" element={<ProductPage products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/registro" element={<CRUD_Products />} />
        </Routes>
      </Suspense>
      <CartModal
        show={isCartModalOpen}
        handleClose={toggleCartModal}
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveProduct={removeProduct}
      />
      <FloatingButton onClick={handleButtonClick} label={<FontAwesomeIcon icon={faWhatsapp} size="2x"/>} />
    </Router>
  );
}

export default App;
