import React, { useState } from "react";
import { Product } from "../../src/types";
import ProductList from "../../src/components/ProductList";
import CartModal from "../../src/components/CartModal";

interface ProductPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, onAddToCart }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleIncreaseQuantity = (id: string) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <ProductList products={products} onAddToCart={onAddToCart} />
      <button onClick={() => setShowCart(true)}></button>
      <CartModal
        show={showCart}
        handleClose={() => setShowCart(false)}
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveProduct={handleRemoveFromCart}
      />
    </div>
  );
};

export default ProductPage;
