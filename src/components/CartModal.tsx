import React, { memo } from 'react';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
  cartItems: { id: string; name: string; price: number; quantity: number; imageUrl: string }[];
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}

const formatPrice = (price: number) => `$${price.toLocaleString()}`;

const CartModal: React.FC<CartModalProps> = memo(({ show, handleClose, cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveProduct }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const monthlyPayment = subtotal / 12;

  return (
    <div className={classNames('cart-modal', { show })}>
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
                  <button onClick={() => onDecreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <p className="product-price">{formatPrice(item.price)}</p>
              <button className="delete-button" onClick={() => onRemoveProduct(item.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
        <div className="cart-summary">
          <p>Subtotal (sin envío): {formatPrice(subtotal)}</p>
          <p className="total">Total: {formatPrice(subtotal)}</p>
          <p>O hasta 12 x {formatPrice(monthlyPayment)} sin interés</p>
          <button className="checkout-button">Iniciar Compra</button>
        </div>
      </div>
    </div>
  );
});

export default CartModal;
