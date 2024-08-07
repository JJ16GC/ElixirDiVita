import { useState} from "react";
import { useCart } from "../src/components/hooks/useCart";
import { Product } from "../src/types";
import { uploadImage } from "./firestoreService";
import '../src/styles/AddProductForm.css'

const AddProductComponent: React.FC = () => {
  const { addProduct } = useCart();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleAddProduct = async () => {
    if (imageFile) {
      try {
        // Subir imagen y obtener URL
        const imageUrl = await uploadImage(imageFile);
        // Crear producto
        const newProduct: Omit<Product, 'id'> = { name, description, price, quantity, imageUrl };
        // Añadir producto
        await addProduct(newProduct);
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

  return (
    <div>
      <h2>Add Product</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductComponent;
