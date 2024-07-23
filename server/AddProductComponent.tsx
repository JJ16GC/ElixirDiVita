// AddProductComponent.tsx
import React, { useState } from "react";
import { useCart } from "./hooks/useCart";
import { Product } from "../types";
import { uploadImage } from "../../server/firestoreService";
import Modal from "./Modal";

const AddProductComponent: React.FC = () => {
  const { addProduct } = useCart();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = async () => {
    if (imageFile) {
      try {
        // Subir imagen y obtener URL
        const imageUrl = await uploadImage(imageFile);
        // Crear producto
        const newProduct: Omit<Product, 'id'> = { name, description, price, quantity, imageUrl };
        // Añadir producto
        await addProduct(newProduct);
        // Mostrar modal
        setShowModal(true);
        // Resetear campos
        setName('');
        setDescription('');
        setPrice(0);
        setQuantity(0);
        setImageFile(null);
      } catch (error) {
        console.error('Error uploading image or adding product:', error);
      }
    } else {
      console.error('No image file selected');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); // Recargar la página después de cerrar el modal
  };

  return (
    <div className="form">
      <h2>Add Product</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleAddProduct}>Agregar Producto</button>

      {showModal && (
        <Modal
          message="Usuario registrado"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AddProductComponent;
