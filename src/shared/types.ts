import { ReactNode } from "react";

export enum SelectedPage {
  Carousel = "Carousel",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface ProofType {
  icon: JSX.Element;
  title: string;
}

export interface WorkoutType {
  name: string;
  description?: string;
  image: string;
}

export interface ProductReviewType {
  name: string;
  description?: string;
  country: string;
  title: string;
  showStar: boolean;
  verifiedBuyer: boolean;
}


export interface BenefitsType {
  storeItems: ProductType[];
  proofs: ProofType[];
}

export interface CardTemplateTypes {
  img?: string;
  title?: string;
  name: string;
  description?: string;
  country?: string;
  showStars: boolean;
  verifiedBuyer: boolean;
}

export interface ReviewsType {
  average: number;
  totalCount: number;
  _id?: string;
}
export interface ProductType {
  id: string;
  _id?: string;
  __v?: number;
  name: string;
  price: number;
  oldprice: number;
  inStock: boolean;
  href: string;
  images: Array<{ src: string; alt: string; _id:string; }>;
  details: string;
  highlights: string[];
  reviews: ReviewsType[];
  createdAt?: string;
 updatedAt?: string;
}

export interface CartItemType {
  id: string;
  quantity: number;
  
}

export type ShoppingCartType = {
  isOpen: boolean;
};

export type ProductCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  subtotal: () => number;
  savedAmount: () => number;
  cartQuantity: number;
  cartItems: CartItemType[];
  storeItems: ProductType[];
  storeReviews:ProductReviewType[];
  error: string | null;
  setProductDetails: (product: ProductType | null) => void;
  selectedProduct: ProductType | null;
  
};

export interface ButtonlinkTypes {
  to: string;
  children: string;
  className: string;
  disabled: boolean;
  onClick?: () => void;
}

export interface ProductSliderType {
  images: Array<{ src: string; alt: string; _id:string; }>;
}

export type ProductCartProviderType = {
  children: ReactNode;
};

export interface H2Types {
  children: ReactNode;
  color: string;
}

export type AccordionType = {
  title: string;
  answer: string;
};


// export interface MongoItemType {
//   id: string;
//   _id: string;
//   price: number;
//   oldprice: number;
//   inStock: boolean;
//   name: string;
//   href: string;
//   images: Array<{ src: string; alt: string; _id:string; }>;
//   details: string;
//   highlights: string[];
//   reviews: ReviewsType[];
//   __v: number;
//   createdAt: string;
//   updatedAt: string;
// }
