import { ReactNode } from "react";

export enum SelectedPage {
  Carousel = "Carousel",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
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


export interface ResponsiveCardType {
  img:string;
  title:string;
  text:string;
}

export interface CardTemplateTypes {
  img?:string;
  title?:string;
  name:string;
  description?:string;
  country?:string;
  showStars:boolean;
  img:string;
  
}

export interface ReviewsType {
  average: number;
  totalCount: number;
}
export interface ProductType {
  id: string;
  name: string;
  price: number;
  oldprice: number;
  href: string;
  images: Array<{ src: string; alt: string }>;
  details: string;
  highlights: string[];
  reviews: ReviewsType[];
}

export interface CartItemType  {
  id: string;
  quantity: number;
};

export type ShoppingCartType = {
  isOpen: boolean;
};

export type ShoppingCartProviderType = {
  children: ReactNode;
};



export interface ShoppingCartContextType  {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItemType[];
};

