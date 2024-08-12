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
      imageUrls: data.imageUrls,
      quantity: 0
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

// Función para subir múltiples imágenes a Firebase Storage y obtener las URLs de descarga
const uploadImages = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => {
    const storageRef = ref(storage, `images/${file.name}`);
    return uploadBytes(storageRef, file).then(() => getDownloadURL(storageRef));
  });
  
  return Promise.all(uploadPromises);
};

export { getProducts, addProduct, uploadImages };
