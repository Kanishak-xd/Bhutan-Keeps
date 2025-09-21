// Homepage Data - Categories and Products
// This file contains mock data for the homepage components

export const categories = [
  {
    id: 1,
    name: "Rachu",
    image: "resources/kiraPurple.png",
    href: "searches.html?q=Rachu",
    description: "Traditional Bhutanese shoulder cloth"
  },
  {
    id: 2,
    name: "Tego",
    image: "resources/kiraOrange.png", 
    href: "searches.html?q=Tego",
    description: "Classic Bhutanese jacket"
  },
  {
    id: 3,
    name: "Wonju",
    image: "resources/twoKira.png",
    href: "searches.html?q=Wonju", 
    description: "Traditional Bhutanese blouse"
  },
  {
    id: 4,
    name: "Kira",
    image: "resources/AquamarineKira.png",
    href: "searches.html?q=Kira",
    description: "Elegant Bhutanese dress"
  },
  {
    id: 5,
    name: "Accessories",
    image: "resources/accessoriesImg.png",
    href: "searches.html?q=Accessories",
    description: "Traditional Bhutanese accessories"
  }
];

export const products = [
  {
    id: 1,
    title: "Traditional Rachu Collection",
    price: "$299.00",
    image: "resources/kira1.png",
    href: "searches.html?q=Rachu",
    rating: 5,
    category: "Rachu"
  },
  {
    id: 2,
    title: "Elegant Kira Dress",
    price: "$399.00", 
    image: "resources/kira2.png",
    href: "searches.html?q=Kira",
    rating: 5,
    category: "Kira"
  },
  {
    id: 3,
    title: "Classic Tego Jacket",
    price: "$349.00",
    image: "resources/kira3.png", 
    href: "searches.html?q=Tego",
    rating: 4,
    category: "Tego"
  },
  {
    id: 4,
    title: "Traditional Wonju Blouse",
    price: "$279.00",
    image: "resources/kira4.png",
    href: "searches.html?q=Wonju", 
    rating: 5,
    category: "Wonju"
  },
  {
    id: 5,
    title: "Bhutanese Accessories Set",
    price: "$199.00",
    image: "resources/kira5.png",
    href: "searches.html?q=Accessories",
    rating: 4,
    category: "Accessories"
  },
  {
    id: 6,
    title: "Premium Rachu Shawl",
    price: "$449.00",
    image: "resources/kira1.png",
    href: "searches.html?q=Rachu",
    rating: 5,
    category: "Rachu"
  }
];

export const uspItems = [
  {
    id: 1,
    icon: "🏺",
    title: "Authentic Textiles",
    description: "Handcrafted by skilled Bhutanese artisans using traditional techniques passed down through generations."
  },
  {
    id: 2,
    icon: "🔒",
    title: "Secure Checkout",
    description: "Your personal and payment information is protected with industry-standard encryption and security measures."
  },
  {
    id: 3,
    icon: "🚚",
    title: "Fast Shipping",
    description: "Free worldwide shipping on orders over $200. Express delivery available to most countries within 3-5 business days."
  },
  {
    id: 4,
    icon: "💎",
    title: "Premium Quality",
    description: "Each piece is carefully selected and inspected to ensure the highest quality and authentic Bhutanese craftsmanship."
  }
];

export const storyContent = {
  title: "Preserving Bhutan's Heritage",
  description: "For over three decades, Bhutan Keeps has been dedicated to preserving and sharing the rich cultural heritage of Bhutan through authentic traditional textiles. Our collection features handcrafted pieces made by skilled artisans using techniques passed down through generations. Each item tells a story of Bhutan's vibrant culture and timeless artistry.",
  image: "resources/rightBoxImg.png",
  ctaText: "Learn More About Our Story",
  ctaHref: "#"
};

export const ctaContent = {
  title: "Discover Authentic Bhutanese Style",
  description: "Explore our curated collection of traditional Bhutanese textiles and accessories. Each piece is carefully selected to bring you the authentic beauty and craftsmanship of Bhutan's rich cultural heritage.",
  primaryCta: {
    text: "Shop Now",
    href: "searches.html"
  },
  secondaryCta: {
    text: "View Collection",
    href: "searches.html?q=all"
  }
};
