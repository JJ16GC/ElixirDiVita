import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../types";
import AddProductComponent from "./AddProductComponent";

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
      <div className="container">
        <AddProductComponent />
      </div>
    </div>
  );
};

export default ProductList;
