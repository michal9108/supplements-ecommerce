import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductCart } from "../scenes/cart/ProductCartContext";

import { ProductType, Featurestype } from "../shared/types"

export interface ProductDetails {
  id: string;
  name: string;
  price: number;
  oldprice: number;
  inStock: boolean;
  href: string;
  images: Array<{ src: string; alt: string; _id: string }>;
  details: string;
  highlights: string[];
  description: Array<{
    title: string;
    content: string;
    summary: string;
    _id: string;
  }>;
  benefits: Array<{ benefittitle: string; text: string; _id: string }>;
  features: Featurestype[];
  reviews: {
    average: number;
    totalCount: number;
    _id?: string;
    counts: Array<{ rating: number; count: number; _id: string }>;
    featured: Array<{
      id: number;
      rating: number;
      title: string;
      content: string;
      datetime: string;
      author: string;
      _id: string;
    }>;
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export const useProductActions = (productDetails: ProductDetails) => {
  const {
    setProductDetails,
    toggleFavorite,
    increaseCartQuantity,
    openCart,
  } = useProductCart();

  const handleBuyNowClick = useCallback(() => {
    setProductDetails(productDetails);
    increaseCartQuantity(productDetails.id);
    openCart();
}, [productDetails, setProductDetails, increaseCartQuantity, openCart]);


  const handleToggleFavoriteClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      toggleFavorite(productDetails.id);
    },
    [productDetails, toggleFavorite]

  );

  const handleRegularClick = useCallback(
    () => {
      
      setProductDetails(productDetails);
    },
    [productDetails,setProductDetails ]

  );





  const navigate = useNavigate();

  const handleButtonClick = useCallback(
    (action: string) => {
      if (action === 'buy') {
        handleBuyNowClick();
        navigate('/productpage');
      } else if (action === 'regularClick') {
        handleRegularClick();
        navigate('/productpage');
      }
    },
    [handleBuyNowClick, navigate, handleRegularClick]
  );

  return {
    handleToggleFavoriteClick,
    handleButtonClick,handleRegularClick
  };
};
