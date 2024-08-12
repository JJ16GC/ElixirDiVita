export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrls: string[]; 
}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string; // Diferencia en singular vs plural
  price: number;
  quantity: number;
};