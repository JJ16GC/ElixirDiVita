import React from 'react';
import '../styles/Cart.css';

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
  cartItems: { id: string; name: string; price: number; quantity: number; imageUrl: string }[];
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ show, handleClose, cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveProduct }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={`cart-modal ${show ? 'show' : ''}`}>
      <div className="cart-modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="product-info">
                <p className="product-title">{item.name}</p>
                <div className="quantity-controls">
                  <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <p className="product-price">${item.price.toLocaleString()}</p>
              <button className="delete-button" onClick={() => onRemoveProduct(item.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
        <div className="cart-summary">
          <p>Subtotal (sin envío) : ${subtotal.toLocaleString()}</p>
          <p className="total">Total: ${subtotal.toLocaleString()}</p>
          <p>O hasta 12 x ${(subtotal / 12).toLocaleString()} sin interés</p>
          <button className="checkout-button">Iniciar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
