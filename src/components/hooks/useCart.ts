import { useState, useEffect } from "react";
import { Product } from "../../types";
import { getProducts, addProduct as addProductToFirestore } from "../../../server/firestoreService";

const useCart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCart = (id: string, amount: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 1) } : item
      );
    });
  };

  const addProduct = async (product: Omit<Product, "id">) => {
    const newProduct = await addProductToFirestore(product);
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: newProduct.id },
    ]);
  };

  const removeProduct = (id: string) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  return { products, cartItems, handleAddToCart, updateCart, addProduct, removeProduct };
};

export { useCart };
