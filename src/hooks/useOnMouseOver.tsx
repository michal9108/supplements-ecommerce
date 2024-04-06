import { useProductCart } from "@/scenes/cart/ProductCartContext";
import React, { useState } from 'react';

const useOnMOuseOver = () => {
  const { storeItems } = useProductCart();

  const initialImageStates: Record<string, string | undefined> = {};
  const [productImages, setProductImages] = useState<Record<string, string | undefined>>(initialImageStates);

  const handleMouseOver = (id: string) => {
    const product = storeItems.find(product => product.id === id);
    if (product) {
      setProductImages(prevState => ({
        ...prevState,
        [id]: storeItems.find(product => product.id === id)?.images[1]?.src
      }));
      
    }
  };

  const handleMouseout = (id: string) => {
    const product = storeItems.find(product => product.id === id);
    if (product) {
      setProductImages(prevState => ({
        ...prevState,
        [id]: storeItems.find(product => product.id === id)?.images[0]?.src
      }));
      
    }
  };

  return {
    handleMouseOver,
    handleMouseout,
    productImages
  };
};

export default useOnMOuseOver;
