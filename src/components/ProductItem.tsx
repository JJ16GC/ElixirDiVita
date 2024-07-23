import React from "react";
import Modal from "react-modal";
import { Product } from "../types";

Modal.setAppElement("#root");

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const formatPrice = (price: number) => price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} onClick={openModal} />
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)}</p>
      <button className="cart-button" onClick={() => onAddToCart(product)}>Agregar</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{formatPrice(product.price)}</p>
          <button onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductItem;
