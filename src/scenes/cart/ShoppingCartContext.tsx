import { createContext, useContext, useState, ReactNode } from "react";
import { ShoppingCart } from "@/scenes/cart/ShoppingCart";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import {
  ProductType,
  CartItemType,
  ProductCartContextType,
  ProductCartProviderType
} from "@/shared/types";

import storeItems from "../../data/items.json"



const ProductCartContext = createContext({} as ProductCartContextType);

export function useProductCart() {
  return useContext(ProductCartContext);
}
export function ProductCartProvider({ children }: ProductCartProviderType) {


const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

function  setProductDetails(product:ProductType | null) {
  setSelectedProduct(product)
}


  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );



  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
  
      if (!existingItem) {
        const newItem: CartItemType = {
          id,
          quantity: 1,
          image: '', 
        };
  
        // Check if the item has images and set the image property accordingly
        if (storeItems.find((item) => item.id === id)?.images.length) {
          newItem.image = storeItems.find((item) => item.id === id)!.images[0].src;
        }
  
        return [...currItems, newItem];
      }
  
      return currItems.map((item) =>
        item.id === id
          ? {
              id:item.id,
              image:item.image,
              quantity: item.quantity + 1,
            }
          : {
            id:item.id,
            image:item.image,
            quantity: item.quantity ,
          }
      );
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
    <ProductCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        selectedProduct,
        setProductDetails,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ProductCartContext.Provider>
  );
}
