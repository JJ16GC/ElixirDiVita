// src/pages/ProductPage.tsx
import React from "react";
import Header from "../components/Header";
import { useCart } from "../components/hooks/useCart";
import ProductList from "../components/ProductList";

const ProductPage: React.FC = () => {
  const { products, handleAddToCart } = useCart();
  return (
    <div>
      <Header></Header>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      
    </div>
  );
};

export default ProductPage;
