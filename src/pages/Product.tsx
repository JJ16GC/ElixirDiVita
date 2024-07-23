// src/pages/ProductPage.tsx
import React from "react";
import { Product } from "../../src/types";
import ProductList from "../../src/components/ProductList";

interface ProductPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, onAddToCart }) => {
  return (
    <div>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ProductPage;

