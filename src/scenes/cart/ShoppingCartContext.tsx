import { createContext, useContext, useState, ReactNode } from "react";
import { ShoppingCart } from "@/scenes/cart/ShoppingCart";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import {
  
  CartItemType,
  ShoppingCartContextType,
} from "@/shared/types";

type ShoppingCartProviderType = {
  children: ReactNode;
};


const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );


  console.log( " cartquantity :"+ cartQuantity )


  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
