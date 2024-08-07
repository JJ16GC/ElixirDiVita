import React, { memo } from 'react';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
  cartItems: CartItem[];
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}

const formatPrice = (price: number) => `$${price.toLocaleString()}`;

const CartModal: React.FC<CartModalProps> = memo(({
  show,
  handleClose,
  cartItems,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct
}) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const monthlyPayment = subtotal / 12;

  return (
    <div className={classNames('cart-modal', { show })}>
      <div className="cart-modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map(item => (
            <CartItemComponent
              key={item.id}
              item={item}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
              onRemoveProduct={onRemoveProduct}
            />
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

const CartItemComponent: React.FC<{
  item: CartItem;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}> = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveProduct }) => (
  <li className="cart-item">
    <img src={item.imageUrl} alt={item.name} />
    <div className="product-info">
      <p className="product-title">{item.name}</p>
      <div className="quantity-controls">
        <button onClick={() => onDecreaseQuantity(item.id)} aria-label="Disminuir cantidad">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncreaseQuantity(item.id)} aria-label="Aumentar cantidad">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
    <p className="product-price">{formatPrice(item.price)}</p>
    <button className="delete-button" onClick={() => onRemoveProduct(item.id)} aria-label="Eliminar producto">
      &times;
    </button>
  </li>
);

export default CartModal;
