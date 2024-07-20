// src/components/ProductList.tsx
import React from "react";
import { Product } from "../types";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
  );
};

export default ProductList;
