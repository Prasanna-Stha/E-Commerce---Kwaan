import { ReactNode } from "react";

export interface Product {
  id: number | string;
  name: string;
  price: number;
  [key: string]: any;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  cartItems: CartItem[];
  handleAddToCart: (product: Product) => void;
  increaseQuantity: (id: number | string) => void;
  decreaseQuantity: (id: number | string) => void;
  removeFromCart: (id: number | string) => void;
  cartCount: number;
}

export interface ProviderProps {
    children: ReactNode;
  }