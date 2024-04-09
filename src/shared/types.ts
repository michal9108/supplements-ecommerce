import { ReactNode } from "react";
import { ReactElement } from "react";

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
  imageSrc?: string;
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
  counts: Array<{ rating: number; count: number; _id: string }>;
  featured: Array<{
    id: number;
    rating: number;
    title: string;
    content: string;
    datetime: string;
    author: string;
    _id: string;
  }>;
}

export type Featurestype = {
  featuretitle: string;
  text: string;
};
export interface ProductType {
  id: string;
  _id?: string;
  __v?: number;
  name: string;
  price: number;
  oldprice: number;
  inStock: boolean;
  href: string;
  images: Array<{ src: string; alt: string; _id: string }>;
  details: string;
  highlights: string[];
  description: Array<{
    title: string;
    content: string;
    summary: string;
    _id: string;
  }>;
  benefits: Array<{ benefittitle: string; text: string; _id: string }>;
  features: Featurestype[];
  reviews: ReviewsType[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItemType {
  id: string;
  quantity: number;
}
export interface FavoriteItemType {
  id: string;
  name: string;
  inStock: boolean;
}

export type ShoppingCartType = {
  isOpen: boolean;
};
export type SmallMobileMenuType = {
  isMenuToggled: boolean;
};




export type SetWishlistType = (wishlist: ProductType[]) => void;
export type HandleClickOnProductType = (productId: string) => void;

export type ProductCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  subtotal: () => number;
  savedAmount: () => number;
  cartQuantity: number;
  cartItems: CartItemType[];
  storeItems: ProductType[];
  storeUsers: UserType[];
  storeReviews: ProductReviewType[];
  error: string | null;
  setProductDetails: (product: ProductType | null) => void;
  selectedProduct: ProductType | null;
  setCartItems: any;
  isProductFavorite: (id: string) => boolean;
  wishlist: ProductType[];
  setWishlist: SetWishlistType;
  isMenuToggled:boolean;
  setIsMenuToggled: any;
  removeFromWishlist: (id: string) => void;
  toggleFavorite: (id: string) => void;
};

export interface ButtonBuyLinkTypes {
  to: string;
  children: string;
  className: string;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonlinkTypes {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export interface ProductSliderType {
  images: Array<{ src: string; alt: string; _id: string }>;
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

export interface AuthFormType {
  title: string;
  buttonText: string;
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

export interface UserType {
  email: string;
  username: string;
  password: string;
}


interface authorType {
  name:string;
  image:string;
}
interface BlogSectionType {
  header:string;
  text:string;
}



export  interface BlogPostType {
id:number;
image:string;
blogposttitle:string,
datetime:string
date:string;
author:authorType;
section1:BlogSectionType
section2:BlogSectionType
section3:BlogSectionType
title:string;

} 