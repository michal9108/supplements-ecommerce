import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ShoppingCart } from "@/scenes/cart/ShoppingCart";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import {
  ProductType,
  CartItemType,
  ProductCartContextType,
  ProductCartProviderType,
  ProductReviewType,
} from "@/shared/types";


const ProductCartContext = createContext({} as ProductCartContextType);

export function ProductCartProvider({ children }: ProductCartProviderType) {

  const apiUrl = import.meta.env.VITE_URL;



  const [storeItems, setstoreItems] = useState<ProductType[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [storeReviews, setstoreReviews] = useState<ProductReviewType[]>([]);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    
    const fetchProductData = async () => {
      try {

        const response = await fetch(import.meta.env.VITE_URL + '/product/items');
        const data = await response.json();
        console.log("fetched product data from entry point", data);
        setstoreItems(data);
        // console.log("data ->", data);
      } catch (error) {
        setError("Error while fetching data from mongo db");
      }
    };
    fetchProductData();
  }, []);
 

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const resp = await fetch(import.meta.env.VITE_URL + '/reviews/reviews');
        const dataReviews = await resp.json();
        // console.log("fetched reviews data from entry point", dataReviews);
        setstoreReviews(dataReviews);
        setisLoading(false);
      } catch (error) {
        setError("Error while fetching data from mongo db");
        setisLoading(false);
      }
    };
    fetchReviewData();
  }, []);

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );

  function setProductDetails(product: ProductType | null) {
    setSelectedProduct(product);
  }

  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "shopping-cart",
    [],
  );

  // console.log('cartItems',cartItems)

  const cartQuantity =
    cartItems.reduce((quantity, item) => item.quantity + quantity, 0) ;

  // console.log("cart quantity", cartQuantity);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null)  {

    
        return [...currItems, {id , quantity:1}];
      } else {
        return currItems.map((item) => {
          if(item.id ===id) {
            return {...item, quantity: item.quantity +1}
          } else {
            return item;
          }
        });
      }

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (storeReviews === null) {
    return <div>No data available.</div>;
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
        error,
        cartQuantity,
        selectedProduct,
        setProductDetails,
        storeReviews,
      }}
    >
      {children}

      <ShoppingCart isOpen={isOpen} />
    </ProductCartContext.Provider>
  );
}
export const useProductCart = () => useContext(ProductCartContext);
