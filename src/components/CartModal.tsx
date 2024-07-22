// src/components/CartModal.tsx
import React from 'react';
import '../styles/Cart.css';

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
  cartItems: { id: number; name: string; price: number; quantity: number; imageUrl: string }[];
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
            <li key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
