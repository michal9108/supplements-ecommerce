import { ProductType } from '@/shared/types';
import React from 'react'
import { useEffect,useState } from 'react';


export default   function  useStoreItems() {

    const [storeItems, setStoreItems] = useState<ProductType[]>([]); // State to hold store itemsb


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
    

  return storeItems;
}
