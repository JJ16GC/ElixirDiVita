// src/components/hooks/useCart.tsx
import { useState } from "react";
import { Product } from "../../types";
import { initialProducts } from "../../data/initialProducts";

const useCart = () => {
  const [products] = useState<Product[]>(initialProducts);([
    // Lista de productos iniciales
  ]);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; quantity: number; imageUrl: string }[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCart = (id: number, amount: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => 
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      );
    });
  };

  return { products, cartItems, handleAddToCart, updateCart };
};

export { useCart };
