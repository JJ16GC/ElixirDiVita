// firestoreService.ts
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebaseConfig";
import { Product } from "../src/types";

// Función para obtener productos
const getProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: Product[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const product: Product = {
      id: doc.id,
      name: data.name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      imageUrl: data.imageUrl,
    };
    products.push(product);
  });
  return products;
};

// Función para añadir un producto
const addProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const docRef = await addDoc(collection(db, "products"), product);
  return { id: docRef.id, ...product };
};

// Función para subir una imagen a Firebase Storage y obtener la URL de descarga
const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

export { getProducts, addProduct, uploadImage };
