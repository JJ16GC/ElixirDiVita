// src/components/ProductList.tsx
import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
