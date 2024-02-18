import { createContext, useContext, useState, ReactNode } from "react";
import { ShoppingCart } from "@/scenes/cart/ShoppingCart";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import {
  ProductType,
  CartItemType,
  ProductCartContextType,
  ProductCartProviderType,
} from "@/shared/types";
import { useEffect } from "react";

const ProductCartContext = createContext({} as ProductCartContextType);

export function useProductCart() {
  return useContext(ProductCartContext);
}
export function ProductCartProvider({ children }: ProductCartProviderType) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );

  function setProductDetails(product: ProductType | null) {
    setSelectedProduct(product);
  }
  const [storeItems, setStoreItems] = useState<ProductType[]>([]); // State to hold store items

  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "shopping-cart",
    [],
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const response = await fetch("http://localhost:4000/product/items"); // Adjust URL to match your backend endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch store items");
        }
        const data = await response.json();
        setStoreItems(data); // Set store items data in state
        console.log(storeItems);
      } catch (error) {
        console.error("Error fetching store items:", error);
      }
    }
    fetchStoreItems();
  }, []);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);

      if (!existingItem) {
        const newItem: CartItemType = {
          id,
          quantity: 1,
          image: "",
        };

        // Check if the item has images and set the image property accordingly
        if (storeItems.find((item) => item.id === id)?.images.length) {
          newItem.image = storeItems.find(
            (item) => item.id === id,
          )!.images[0].src;
        }

        return [...currItems, newItem];
      }

      return currItems.map((item) =>
        item.id === id
          ? {
              id: item.id,
              image: item.image,
              quantity: item.quantity + 1,
            }
          : {
              id: item.id,
              image: item.image,
              quantity: item.quantity,
            },
      );
    });
  }

  function decreaseCartQuantity(id: string) {
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
  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function subtotal() {
    return cartItems.reduce((total, cartItem) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  }

  function savedAmount() {
    return cartItems.reduce((tot, cartItem) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return (
        tot +
        ((item?.oldprice || 0) * cartItem.quantity -
          (item?.price || 0) * cartItem.quantity)
      );
    }, 0);
  }

  return (
    <ProductCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        subtotal,
        savedAmount,
        openCart,
        closeCart,
        cartItems,
        storeItems,
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
