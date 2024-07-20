// src/components/CartModal.tsx
import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import '../styles/Cart.css'; // Agrega estilos personalizados aquí

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { id: number; name: string; quantity: number; price: number }[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button onClick={onClose} className="modal-close-button">X</button>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </Modal>
    </CSSTransition>
  );
};

export default CartModal;
