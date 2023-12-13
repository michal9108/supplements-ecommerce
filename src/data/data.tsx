
interface Color {
    name: string;
    className: string;
    selectedClass: string;
  }
  
  interface Size {
    name: string;
    inStock: boolean;
  }
  
  interface Image {
    src: string;
    alt: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    href: string;
    images: Image[];
    colors: Color[];
    sizes: Size[];
    description: string;
    highlights: string[];
    details: string;
  }
  
  export const data: Product[] = [
    {
      id: 1,
      name: "Basic Tee 6-Pack",
      price: 192.77,
      href: "#",
      images: [
        {
          src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
          alt: "Model wearing plain white basic tee.",
        },
      ],
      colors: [
        { name: "White", className: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", className: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", className: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
      sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
      ],
      description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
      ],
      details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    // Add more products if needed
  ];
  