// import React, { useState, useEffect } from "react";
// import { RadioGroup } from "@headlessui/react";
// import items from "@//data/items.json";
// import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";

// interface Size {
//   name: string;
//   inStock: boolean;
// }

// interface Product {
//   id: number | string; 

//   sizes: Size[];
// }

// const product: Product = items[0];

// function classNames(...classes: (string | undefined | null | false)[]): string {
//   return classes.filter(Boolean).join(" ");
// }

// const Attributes = ({
//   onSizeChange,
// }: {
//   onSizeChange: (size: string) => void;
// }) => {
//   const { increaseCartQuantity, decreaseCartQuantity, cartItems } =
//     useShoppingCart();
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

//   useEffect(() => {
//     // Invoke the callback with the updated selected size
//     onSizeChange(selectedSize.name);
//   }, [selectedSize, onSizeChange]);

//   return (
//     <div>
//       {/* SIZES */}
//       <div className="mt-10">
//         <div className="flex items-center justify-between">
//           <h3 className="text-base text-gray-900 font-medium my-auto">Size</h3>
//           <a
//             href="#"
//             className="text-base font-medium text-indigo-600 hover:text-indigo-500"
//           >
//             Size guide
//           </a>
//         </div>

//         <RadioGroup
//           value={selectedSize}
//           className="mt-4"
//           onChange={setSelectedSize}
//         >
//           <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
//           <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3">
//             {product.sizes.map((size) => (
//               <RadioGroup.Option
//                 key={size.name}
//                 value={size}
//                 disabled={!size.inStock}
//                 className={({ active }) =>
//                   classNames(
//                     size.inStock
//                       ? "cursor-pointer bg-primary-100 text-gray-900 shadow-sm"
//                       : "cursor-not-allowed bg-gray-300 text-gray-900",

//                     active ? "ring-2 ring-b" : "",
//                     "group relative flex items-center justify-center rounded-md border py-3 px-4 text-lg font-bold uppercase hover:bg-gray-400 focus:outline-none sm:flex-1 sm:py-6",
//                   )
//                 }
//               >
//                 {({ active, checked }) => (
//                   <>
//                     <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
//                     {size.inStock ? (
//                       <span
//                         className={classNames(
//                           active ? "border-3 " : "border",
//                           checked
//                             ? "border-secondary-500  "
//                             : "border-transparent",
//                           "pointer-events-none absolute -inset-px rounded-md",
//                         )}
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <span
//                         aria-hidden="true"
//                         className="pointer-events-none absolute rounded-md  border-gray-200"
//                       >
//                         <svg
//                           className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                           viewBox="0 0 100 100"
//                           preserveAspectRatio="none"
//                           stroke="currentColor"
//                         >
//                           <line
//                             x1={0}
//                             y1={100}
//                             x2={100}
//                             y2={0}
//                             vectorEffect="non-scaling-stroke"
//                           />
//                         </svg>
//                       </span>
//                     )}
//                   </>
//                 )}
//               </RadioGroup.Option>
//             ))}
//           </div>
//         </RadioGroup>
//       </div>
//     </div>
//   );
// };

// export default Attributes;
