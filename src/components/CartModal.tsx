import React, { useState, memo } from "react";
import "../styles/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrls: string[];
  boxes: boolean;
  selectedBox?: string;
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

const CartModal: React.FC<CartModalProps> = memo(
  ({
    show,
    handleClose,
    cartItems,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onRemoveProduct,
  }) => {
    const [buttonText] = useState("Iniciar Compra");

    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const monthlyPayment = subtotal / 12;

    // Función para formatear los datos del pedido en un mensaje de texto
    // Función para formatear los datos del pedido en un mensaje de texto con emojis
    // Función para formatear los datos del pedido en un mensaje de texto con emojis y tipo de caja
    const formatWhatsAppMessage = () => {
      let message = "*Hola 😊, me gustaría hacer un pedido:* \n\n";

      cartItems.forEach((item, index) => {
        message += `🔹 ${index + 1}. ${item.name} \n   ➡️ Cantidad: ${
          item.quantity
        } \n   💸 Precio: $${item.price}`;

        // Agregar tipo de caja si está seleccionado
        if (item.selectedBox) {
          message += `\n   📦 Caja: ${item.selectedBox}`;
        }

        message += "\n\n"; // Espacio entre productos
      });
      message += '*Precio de envio variable dependiento de tu ubicacion* 🛫\n\n'
      message += `*🛎️ Total: $${subtotal}*`;
      return message;
    };

    // Función para abrir WhatsApp con los datos del pedido
    const handleBuy = () => {
      const message = formatWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "3173807044"; // Reemplaza con el número de teléfono
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(url, "_blank");
    };

    return (
      <div className={classNames("cart-modal", { show })}>
        <div className="cart-modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Carrito de Compras</h2>
          <ul>
            {cartItems.map((item) => (
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
            <button className="checkout-button" onClick={handleBuy}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

const CartItemComponent: React.FC<{
  item: CartItem;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}> = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveProduct }) => (
  <li className="cart-item">
    <img src={item.imageUrls[0]} alt={item.name} />
    <div className="product-info">
      <p className="product-title">{item.name}</p>
      {item.selectedBox && (
        <p className="selected-box">Caja: {item.selectedBox}</p>
      )}
      <div className="quantity-controls">
        <button
          onClick={() => onDecreaseQuantity(item.id)}
          aria-label="Disminuir cantidad"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onIncreaseQuantity(item.id)}
          aria-label="Aumentar cantidad"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
    <p className="product-price">{formatPrice(item.price)}</p>
    <button
      className="delete-button"
      onClick={() => onRemoveProduct(item.id)}
      aria-label="Eliminar producto"
    >
      &times;
    </button>
  </li>
);

export default CartModal;
