// src/components/ProductItem.tsx
import React, { useState } from "react";
import Modal from "react-modal";
import { Product } from "../types";

// Configura el modal
Modal.setAppElement("#root");

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} onClick={openModal} />
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)}</p>
      <button className="cart-button" onClick={() => onAddToCart(product)}>
        Agregar
      </button>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Image Modal"
          className="ReactModal__Content"
          overlayClassName="ReactModal__Overlay"
        >
          <button className="modal-close-button" onClick={closeModal}>
            X
          </button>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "60%" }}
          />
          <p>{product.description || "No description available"}</p>
        </Modal>
      )}
    </div>
  );
};

export default ProductItem;