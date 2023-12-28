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

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
