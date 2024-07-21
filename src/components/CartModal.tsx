// src/components/CartModal.tsx
import React from 'react';
import '../styles/Cart.css'

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
  cartItems: { id: number, name: string, price: number, quantity: number }[];
}

const CartModal: React.FC<CartModalProps> = ({ show, handleClose, cartItems }) => {
  return (
    <div className={`cart-modal ${show ? 'show' : ''}`}>
      <div className="cart-modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Carrito de Compras</h2>
        <br></br>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
