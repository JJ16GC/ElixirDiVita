import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import { Product } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoxSelectionModal from "./BoxSelectionModal";
import "../styles/ProductItem.css";

Modal.setAppElement("#root");

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product, boxType: string) => void;
}

const formatPrice = (price: number): string =>
  price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [boxModalIsOpen, setBoxModalIsOpen] = useState(false);

  const openModal = useCallback(() => setModalIsOpen(true), []);
  const closeModal = useCallback(() => setModalIsOpen(false), []);

  const openBoxModal = useCallback(() => {
    if (product.boxes) {
      setBoxModalIsOpen(true);
    } else {
      onAddToCart(product, "");
    }
  }, [product, onAddToCart]);

  const closeBoxModal = useCallback(() => setBoxModalIsOpen(false), []);

  const handleAddToCart = useCallback(
    (boxType: string) => {
      onAddToCart(product, boxType);
      closeBoxModal();
    },
    [onAddToCart, product, closeBoxModal]
  );

  return (
    <div className="product">
      <div className="product-item">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          onClick={openModal}
          className="product-image"
        />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button
          className="cart-button"
          onClick={openBoxModal}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          Agregar
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button
            className="modal-close-button"
            onClick={closeModal}
            aria-label="Cerrar modal"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <Carousel
            showThumbs={false}
            centerMode
            infiniteLoop
            useKeyboardArrows
            autoPlay
            emulateTouch
            showStatus={false}
          >
            {product.imageUrls.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </Carousel>
          <div className="product-list-2">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-description">{product.description}</p>
            <p className="modal-price">{formatPrice(product.price)}</p>
            <button
              className="btn-modal"
              onClick={openBoxModal}
              aria-label={`Agregar ${product.name} al carrito desde modal`}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </Modal>

      {product.boxes && (
        <BoxSelectionModal
          isOpen={boxModalIsOpen}
          onRequestClose={closeBoxModal}
          onSelectBox={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductItem;
