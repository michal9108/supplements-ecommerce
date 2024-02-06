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

export interface ReviewType {
  name: string;
  description?: string;
country:string;
title:string;
showStar:boolean;
}

export interface BenefitsType {
  storeItems: ProductType[];
  proofs:ProofType[];

}

export interface CardTemplateTypes {
  img?:string;
  title?:string;
  name:string;
  description?:string;
  country?:string;
  showStars:boolean;
  
  
}

export interface ReviewsType {
  average: number;
  totalCount: number;
}
export interface ProductType {
  id: number;
  name: string;
  price: number;
  oldprice:number;
  href: string;
  images: Array<{ src: string; alt: string }>;
  details: string;
  highlights: string[];
  reviews: ReviewsType[];
}

export interface CartItemType  {
  id: number;
  quantity: number;
  image:string;
};

export type ShoppingCartType = {
  isOpen: boolean;
};

export type ProductCartContextType  = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemType[];
  setProductDetails: (product: ProductType | null) => void;
  selectedProduct: ProductType | null, 
};

export interface ButtonlinkTypes {
  to:string;
  children:string;
  className:string;
onClick?: () => void;
}

export interface ProductSliderType {
  images:ProductType["images"]
}


export type ProductCartProviderType =  {
  children: ReactNode;
};

