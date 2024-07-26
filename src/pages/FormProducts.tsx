import React from "react";
import AddProductComponent from "../admin/AddProductComponent";

interface ProductListProps {}

const CRUD_Products: React.FC<ProductListProps> = ({}) => {
  return (
    <div className="container">
        <AddProductComponent />
    </div>
  );
};

export default CRUD_Products;
