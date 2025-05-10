import { CartItem, ContextType, Product, ProviderProps } from "@/@types/context/context";
import React, { createContext, useState, useContext } from "react";

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id: number | string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number | string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id: number | string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Context.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cartItems,
        handleAddToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProduct = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useProduct must be used within a ContextProvider");
  }
  return context;
};
