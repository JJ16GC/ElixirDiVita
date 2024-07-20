// src/hooks/useCart.ts
import { useState } from 'react';
import { Product } from '../../types';
import { initialProducts } from '../../data/initialProducts';

export const useCart = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return {
    products,
    cart,
    handleAddToCart
  };
};
