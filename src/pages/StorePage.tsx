import React from 'react'
import Product from '@/scenes/ProductPage/ProductCard/Product'
import storeItems from "../data/items.json"
export default function StorePage() {
  return (
    <div>
        {storeItems.map((item) => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
    </div>
  )
}
