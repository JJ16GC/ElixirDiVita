import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../types";
import '../styles/ProductList.css';
import ImageComponent from "./ImageComponent";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = React.memo(({ products, onAddToCart }) => {
  return (
    <div className="container-product">
      <ImageComponent></ImageComponent>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
});

export default ProductList;
