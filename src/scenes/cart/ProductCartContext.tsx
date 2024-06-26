
import { createContext, useContext, useState, useEffect } from "react";
import { ShoppingCart } from "@/scenes/cart/ShoppingCart";
import MobileMenu from "../../shared/MobileMenu";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import {
  ProductType,
  CartItemType,
  ProductCartContextType,
  ProductCartProviderType,
  ProductReviewType,
  UserType,
} from "@/shared/types";
import { RotatingLines } from "react-loader-spinner";
import NewsletterModal from "../Newsletter-modal";


//CONTEXT
const ProductCartContext = createContext({} as ProductCartContextType);

export function ProductCartProvider({ children }: ProductCartProviderType) {
  const [storeItems, setstoreItems] = useState<ProductType[]>([]);
  const [storeUsers, setstoreUsers] = useState<UserType[]>([]);
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

//Mobile Menu



const [isMenuToggled, setIsMenuToggled] = useState(false);

const openMenu = () => setIsMenuToggled(true);
const closeMenu = () => setIsMenuToggled(false);


//wishlist 

const [wishlist, setWishlist] = useLocalStorage<ProductType[]>("wishlist",[]);


  const isProductFavorite = (id: string): boolean => {
    return wishlist.some((item) => item.id === id);
  };


  console.log('wishlist array ',wishlist)
  console.log('wishlist length ',wishlist.length)

 
  function removeFromWishlist(id: string) {
    setWishlist((prev) =>  {
      return prev.filter((item) => item.id !== id);
    });
  }

 

  const toggleFavorite = (id:string) => {
    const itemDetails = storeItems.find(item => item.id === id);
  
    if (!itemDetails) {
      console.error(`Item with id ${id} not found in storeItems`);
      return;
    }
  
    if (isProductFavorite(id)) {
      // Remove from wishlist
      setWishlist(prev => prev.filter(item => item.id !== id));
    } else {
      // Add to wishlist
      setWishlist(prev => [...prev, { ...itemDetails }]);
    }
  };


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


  const [visibleModal, setVisible] = useState(false);
  const [newsletterModalShow, setnewsletterModalShow] = useState(false);
  const handleCloseModal = () => setVisible(false);


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
        openMenu,
        closeMenu,
        closeCart,
        cartItems,
        storeItems,
        storeUsers,
        error,
        cartQuantity,
        selectedProduct,
        setProductDetails,
        storeReviews,
        setCartItems,
        removeFromWishlist,
        toggleFavorite,
        isProductFavorite,
        wishlist,
        setWishlist,
         isMenuToggled,
         setIsMenuToggled,
         setnewsletterModalShow,
         handleCloseModal,
         visibleModal,
         newsletterModalShow,
        
    
      }}
    >
      {children}
      <NewsletterModal newsletterModalShow={visibleModal} />
      <ShoppingCart isOpen={isOpen} />
      <MobileMenu isMenuToggled={isMenuToggled}/>
    </ProductCartContext.Provider>
  );
}
export const useProductCart = () => useContext(ProductCartContext);
