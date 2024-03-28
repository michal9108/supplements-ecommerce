import { createContext, useContext, useState, useEffect } from "react";
import { ShoppingCart } from "@/scenes/cart/ShoppingCart";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import {
  ProductType,
  CartItemType,
  ProductCartContextType,
  ProductCartProviderType,
  ProductReviewType,
} from "@/shared/types";
import { RotatingLines } from "react-loader-spinner";

const ProductCartContext = createContext({} as ProductCartContextType);

export function ProductCartProvider({ children }: ProductCartProviderType) {
  const [storeItems, setstoreItems] = useState<ProductType[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [storeReviews, setstoreReviews] = useState<ProductReviewType[]>([]);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_URL + "/product/items",
        );
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
        const resp = await fetch(import.meta.env.VITE_URL + "/reviews/reviews");
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

  const [wishlist, setWishlist] = useState<string[]>([]);


  const toggleFavorite = (productId: string) => {
    const isProductInWishlist = wishlist.includes(productId);

    if (isProductInWishlist) {
      // Remove from wishlist
      setWishlist((prev) => prev.filter((id) => id !== productId));
    } else {
      // Add to wishlist
      setWishlist((prev) => [...prev, productId]);
    }
  };


  console.log(wishlist)

  // Function to check if a product is in the wishlist
  const isProductFavorite = (productId: string) => {
    return wishlist.includes(productId);
  };

  // console.log('cartItems',cartItems)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  // console.log("cart quantity", cartQuantity);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: string) {
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
    return (
      <div className=" flex w-full mx-auto justify-center items-center h-screen">
        {" "}
        <RotatingLines
          visible={true}
          width="96"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
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
        setCartItems,
        toggleFavorite,
        isProductFavorite,
        wishlist,
      }}
    >
      {children}

      <ShoppingCart isOpen={isOpen} />
    </ProductCartContext.Provider>
  );
}
export const useProductCart = () => useContext(ProductCartContext);
