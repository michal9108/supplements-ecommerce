// import { Button, Card } from "react-bootstrap";
// import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
// import { formatCurrency } from "@/scenes/cart/formatCurrency";

// type StoreItemProps = {
//   id: string
//   price: number

// };

// export function StoreItem({ id, price }: StoreItemProps) {
//   const {
//     getItemQuantity,
//     increaseCartQuantity,
//     decreaseCartQuantity,
//     removeFromCart,
//   } = useShoppingCart();
//   const quantity = getItemQuantity(id);

//   return (
//     <Card className="h-100">
//       <Card.Img
//         variant="top"
//         height="200px"
//         style={{ objectFit: "cover" }}
//       />
//       <Card.Body className="d-flex flex-column">
//         <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
//           <span className="fs-2">Shirt</span>
//           <span className="ms-2 text-muted">{formatCurrency(price)}</span>
//         </Card.Title>
//         <div className="mt-auto">
//           {quantity === 0 ? (
//             <button className="w-100 " onClick={() => increaseCartQuantity(id)}>
//               + Add To Cart
//             </button>
//           ) : (
//             <div
//               className="d-flex align-items-center flex-column"
//               style={{ gap: ".5rem" }}
//             >
//               <div
//                 className="d-flex align-items-center justify-content-center"
//                 style={{ gap: ".5rem" }}
//               >
//                 <button onClick={() => decreaseCartQuantity(id)}>-</button>
//                 <div>
//                   <span className="fs-3">{quantity}</span> in cart
//                 </div>
//                 <button onClick={() => increaseCartQuantity(id)}>+</button>

//               </div>
//               <button
//                 onClick={() => removeFromCart(id)}
              
//               >
//                 Remove
//               </button>
//             </div>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }
