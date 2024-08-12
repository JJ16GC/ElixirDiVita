import React, { useState } from "react";
import { useCart } from "../components/hooks/useCart";
import { Product } from "../types";
import { uploadImages } from "../../server/firestoreService";
import Modal from "../components/Modal";
import "../styles/AddProductForm.css";

const AddProductComponent: React.FC = () => {
  const { addProduct } = useCart();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // Nuevo estado para manejar carga

  const handleAddProduct = async () => {
    if (!name || !description || price <= 0 ) {
      console.error("Please fill all fields correctly");
      return;
    }

    if (imageFiles.length === 0) {
      console.error("No image files selected");
      return;
    }

    setLoading(true); // Iniciar carga

    try {
      // Subir imágenes y obtener URLs
      const imageUrls = await uploadImages(imageFiles);

      // Crear producto
      const newProduct: Omit<Product, "id"> = {
        name,
        description,
        price,
        imageUrls,
        quantity: 0
      };

      // Añadir producto
      await addProduct(newProduct);

      // Mostrar modal
      setShowModal(true);

      // Resetear campos
      setName("");
      setDescription("");
      setPrice(0);
      setImageFiles([]);
    } catch (error) {
      console.error("Error Subiendo imagenes o agregando productos:", error);
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files)); // Convertir la lista de archivos en un array
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Puedes agregar lógica aquí para actualizar la interfaz si es necesario
  };

  return (
    <div className="form">
      <h2>Agregar Producto</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripcion"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Precio"
      />
      <input type="file" onChange={handleImageChange} multiple />
      <button className="submit" onClick={handleAddProduct} disabled={loading}>
        {loading ? "Adding..." : "Agregar Producto"}
      </button>

      {showModal && (
        <Modal message="Producto agregado" onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AddProductComponent;
