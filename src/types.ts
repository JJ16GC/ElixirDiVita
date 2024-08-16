export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  boxes: boolean;
  imageUrls: string[]; 
  selectedBox?: string; // Añadido para almacenar la caja seleccionada
}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string; // Diferencia en singular vs plural
  price: number;
  quantity: number;
  boxes: boolean;
};