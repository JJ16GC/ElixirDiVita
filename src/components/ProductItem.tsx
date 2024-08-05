import React from "react";
import Modal from "react-modal";
import { Product } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '../styles/ProductItem.css'


Modal.setAppElement("#root");

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    console.log("Abriendo modal para producto:", product);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  const formatPrice = (price: number) => price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const handleAddToCart = (product: Product) => {
    console.log("Agregando al carrito:", product);
    onAddToCart(product);
  };

  return (
    <div className="product">
      <div className="product-item">
        <img src={product.imageUrl} alt={product.name} onClick={openModal} />
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
        <button className="cart-button" onClick={() => handleAddToCart(product)}>Agregar</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <div className="modal-left">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="modal-right">
            <button className="close-button-modal" onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></button>
            <h2 className="">{product.name}</h2>
            <p>{product.description}</p>
            <p>{formatPrice(product.price)}</p>
            <button className="btn-modal" onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductItem;
