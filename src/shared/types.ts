import { ReactNode } from "react";
import { ReactElement } from 'react';

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

export interface SocialImgType {
  name?: string;
  opinion?: string;
  image?: string;
}

export interface ProductReviewType {
  name: string;
  description?: string;
  country: string;
  title: string;
  showStar: boolean;
  verifiedBuyer: boolean;
}


// export interface BenefitsType {
//   storeItems: ProductType[];
//   proofs: ProofType[];
// }

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
  counts:Array<{rating: number; count:number; _id:string;}>
  featured:Array<{id: number; rating: number; title:string; content:string; datetime:string, author:string; _id:string;}>
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
  description:Array<{ title: string; content: string; summary:string; _id:string; }>;
  benefits?:Array<{ benefittitle: string; text: string; _id:string; }>;
  features?:Array<{ featuretitle: string; text: string;  _id:string; }>;
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

// export type WishListItem = {
//   id: string
  
// }

export type SetWishlistType = (wishlist: ProductType[]) => void;


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
  setCartItems:any;
  isProductFavorite:  (id: string) => boolean
  wishlist: ProductType[]
  setWishlist: SetWishlistType;
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  toggleFavorite:(id: string) => void

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


export interface AuthFormType  {
  title: string;
  buttonText:string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export interface BenefitType {
  benefittitle: string;
  text: string;
}

export interface TestimonialTypes {
  user: string;
  age: number;
  city: string;
  src: string;
}




export interface RedirectIfAuthenticatedProps {
  Component: ReactElement;
}

export interface RequireAuthProps {
  Component: ReactElement;
}