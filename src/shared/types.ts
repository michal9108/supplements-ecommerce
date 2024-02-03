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
  
  
}

export interface ReviewsType {
  average: number;
  totalCount: number;
}
export interface ProductType {
  id: number;
  name: string;
  price: number;
  href: string;
  images: Array<{ src: string; alt: string }>;
  details: string;
  highlights: string[];
  reviews: ReviewsType[];
}

export type CartItemType =  {
  id: number;
  quantity: number;
};

export type ShoppingCartType = {
  isOpen: boolean;
};





export type ShoppingCartContextType  = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemType[];
};

