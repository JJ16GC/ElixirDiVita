import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductPage from "./pages/Product";
import CartPage from "./components/CartModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/carrito"></Route>
      </Routes>
    </Router>
  );
}

export default App;
