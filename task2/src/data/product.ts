import type { ProductType } from "../type/product";

export const products: ProductType[] = [

  {
    id: 1,
    title: "Elegant Floral Dress",
    category: "Women's Fashion",
    brand: "Luna Wear",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviews: 128,
    description:
      "A beautiful floral dress designed with a comfortable fit and elegant style for casual outings, brunches, shopping, vacations, and special occasions.",
    image:
      "https://images.pexels.com/photos/28446011/pexels-photo-28446011.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: "In Stock",

    specifications: {
      productType: "Floral Dress",
      material: "Cotton Blend",
      colour: "Floral Print",
      height: "Knee Length",
      width: "Regular Fit",
      weight: "450 g",
    },

    size: {
      productHeight: "Knee Length",
      productWidth: "Regular Fit",
      packageDimensions: "35 × 25 × 5 cm",
    },

    delivery: {
      estimatedTime: "3–7 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged or defective products",
      refund: "Refund after successful product inspection",
    },

    careInstructions: {
      sunlight: "Keep away from direct sunlight",
      watering: "Not applicable",
      maintenance: "Machine wash with similar colours",
    },

    features: [
      "Elegant floral design",
      "Comfortable fit",
      "Soft and breathable fabric",
      "Suitable for casual and special occasions",
      "Easy to style",
    ],

    whatsIncluded: [
      "1 Floral Dress",
    ],

    warranty: "No warranty",

    seller: "Luna Wear",
  },


  {
    id: 2,
    title: "Premium Men's Denim Jacket",
    category: "Men's Fashion",
    brand: "Urban Vogue",
    price: 1999,
    originalPrice: 2599,
    discount: 23,
    rating: 4.5,
    reviews: 96,
    description:
      "A modern denim jacket designed for men with a comfortable fit and versatile style for casual everyday outfits, travel, parties, and weekend looks.",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=600",

    stock: "In Stock",

    specifications: {
      productType: "Denim Jacket",
      material: "Denim Cotton",
      colour: "Blue",
      height: "Regular Length",
      width: "Regular Fit",
      weight: "750 g",
    },

    size: {
      productHeight: "Regular Length",
      productWidth: "Regular Fit",
      packageDimensions: "40 × 30 × 8 cm",
    },

    delivery: {
      estimatedTime: "3–7 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged or defective products",
      refund: "Refund after product inspection",
    },

    careInstructions: {
      sunlight: "Dry away from direct sunlight",
      watering: "Not applicable",
      maintenance: "Machine wash as per care label",
    },

    features: [
      "Premium denim fabric",
      "Modern casual design",
      "Comfortable regular fit",
      "Suitable for everyday wear",
      "Easy to pair with casual outfits",
    ],

    whatsIncluded: [
      "1 Denim Jacket",
    ],

    warranty: "No warranty",

    seller: "Urban Vogue",
  },


  {
    id: 3,
    title: "Elegant Leather Handbag",
    category: "Accessories",
    brand: "Velora",
    price: 1799,
    originalPrice: 2299,
    discount: 22,
    rating: 4.7,
    reviews: 156,
    description:
      "A sophisticated leather handbag featuring a spacious interior and elegant design for everyday use, office wear, shopping, and special occasions.",
    image:
      "https://images.pexels.com/photos/8502477/pexels-photo-8502477.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: "In Stock",

    specifications: {
      productType: "Leather Handbag",
      material: "Faux Leather",
      colour: "Brown",
      height: "28 cm",
      width: "35 cm",
      weight: "650 g",
    },

    size: {
      productHeight: "28 cm",
      productWidth: "35 cm",
      packageDimensions: "40 × 32 × 12 cm",
    },

    delivery: {
      estimatedTime: "3–6 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for manufacturing defects",
      refund: "Refund after successful inspection",
    },

    careInstructions: {
      sunlight: "Avoid prolonged direct sunlight",
      watering: "Not applicable",
      maintenance: "Clean with a soft dry cloth",
    },

    features: [
      "Elegant design",
      "Spacious interior",
      "Comfortable handles",
      "Suitable for office and casual use",
      "Easy to maintain",
    ],

    whatsIncluded: [
      "1 Handbag",
    ],

    warranty: "6 months against manufacturing defects",

    seller: "Velora",
  },


  {
    id: 4,
    title: "Elegant Women's Heels",
    category: "Women's Fashion",
    brand: "Step Mode",
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    rating: 4.6,
    reviews: 143,
    description:
      "Elegant women's heels designed to add a stylish touch to party outfits, dresses, weddings, dinners, and special occasions.",
   image:
  "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/771/7845/1/1/307898740/307898740_3_1_720x928.webp?q=75&w=1920",
    stock: "In Stock",

    specifications: {
      productType: "Women's Heels",
      material: "Synthetic Leather",
      colour: "Black",
      height: "8 cm Heel",
      width: "Regular Fit",
      weight: "600 g",
    },

    size: {
      productHeight: "8 cm Heel",
      productWidth: "Regular Fit",
      packageDimensions: "32 × 22 × 12 cm",
    },

    delivery: {
      estimatedTime: "3–7 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged or defective products",
      refund: "Refund after product inspection",
    },

    careInstructions: {
      sunlight: "Store away from direct sunlight",
      watering: "Not applicable",
      maintenance: "Clean with a soft dry cloth",
    },

    features: [
      "Elegant party design",
      "Comfortable fit",
      "Stylish heel",
      "Suitable for special occasions",
      "Easy to style",
    ],

    whatsIncluded: [
      "1 Pair of Heels",
    ],

    warranty: "No warranty",

    seller: "Step Mode",
  },


  {
    id: 5,
    title: "Classic Men's Casual Shirt",
    category: "Men's Fashion",
    brand: "Urban Line",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    rating: 4.4,
    reviews: 87,
    description:
      "A stylish casual shirt designed with a clean modern look and comfortable fabric. Perfect for office-casual outfits, dinners, travel, and weekend wear.",
  image:
  "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    stock: "In Stock",

    specifications: {
      productType: "Casual Shirt",
      material: "Cotton Blend",
      colour: "Light Blue",
      height: "Regular Length",
      width: "Regular Fit",
      weight: "300 g",
    },

    size: {
      productHeight: "Regular Length",
      productWidth: "Regular Fit",
      packageDimensions: "35 × 25 × 5 cm",
    },

    delivery: {
      estimatedTime: "3–7 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged products",
      refund: "Refund after product inspection",
    },

    careInstructions: {
      sunlight: "Dry in shade",
      watering: "Not applicable",
      maintenance: "Machine wash with similar colours",
    },

    features: [
      "Comfortable cotton blend",
      "Modern casual design",
      "Regular fit",
      "Suitable for office and casual wear",
      "Breathable fabric",
    ],

    whatsIncluded: [
      "1 Casual Shirt",
    ],

    warranty: "No warranty",

    seller: "Urban Line",
  },


  {
    id: 6,
    title: "Classic White Sneakers",
    category: "Footwear",
    brand: "Step Mode",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    rating: 4.6,
    reviews: 187,
    description:
      "Classic white sneakers designed for everyday comfort and versatile styling. Perfect for jeans, dresses, casual outfits, travel, and daily wear.",
   image:
  "https://cdn.sanity.io/images/r2emo59v/production/2ba9d3756d5bb660aeaaa240bdc8cc59ac44630e-1200x1598.png",
    stock: "In Stock",

    specifications: {
      productType: "Casual Sneakers",
      material: "Synthetic Leather",
      colour: "White",
      height: "Low Top",
      width: "Regular Fit",
      weight: "700 g",
    },

    size: {
      productHeight: "Low Top",
      productWidth: "Regular Fit",
      packageDimensions: "35 × 25 × 14 cm",
    },

    delivery: {
      estimatedTime: "3–6 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged or defective products",
      refund: "Refund after product inspection",
    },

    careInstructions: {
      sunlight: "Dry away from direct sunlight",
      watering: "Not applicable",
      maintenance: "Clean with a soft damp cloth",
    },

    features: [
      "Classic white design",
      "Comfortable everyday wear",
      "Lightweight construction",
      "Suitable for casual outfits",
      "Easy to clean",
    ],

    whatsIncluded: [
      "1 Pair of Sneakers",
    ],

    warranty: "6 months against manufacturing defects",

    seller: "Step Mode",
  },


  {
    id: 7,
    title: "Women's Casual Top",
    category: "Women's Fashion",
    brand: "Luna Wear",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    rating: 4.5,
    reviews: 84,
    description:
      "A stylish casual top designed with a comfortable fit and soft fabric. Perfect for everyday wear, shopping, outings, and weekend styling.",
   image:
  "https://media.kohlsimg.com/is/image/kohls/7971938?hei=600&op_sharpen=1&wid=600",
    stock: "In Stock",

    specifications: {
      productType: "Casual Top",
      material: "Cotton Blend",
      colour: "Pink",
      height: "Regular Length",
      width: "Regular Fit",
      weight: "250 g",
    },

    size: {
      productHeight: "Regular Length",
      productWidth: "Regular Fit",
      packageDimensions: "30 × 22 × 4 cm",
    },

    delivery: {
      estimatedTime: "3–7 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged products",
      refund: "Refund after product inspection",
    },

    careInstructions: {
      sunlight: "Dry away from direct sunlight",
      watering: "Not applicable",
      maintenance: "Machine wash with similar colours",
    },

    features: [
      "Soft and comfortable fabric",
      "Stylish casual design",
      "Regular fit",
      "Suitable for everyday wear",
      "Easy to style",
    ],

    whatsIncluded: [
      "1 Casual Top",
    ],

    warranty: "No warranty",

    seller: "Luna Wear",
  },


  {
    id: 8,
    title: "Men's Casual T-Shirt",
    category: "Men's Fashion",
    brand: "Urban Line",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.4,
    reviews: 76,
    description:
      "A comfortable casual T-shirt with a modern fit and breathable fabric. Ideal for everyday wear, travel, and relaxed weekend outfits.",
  image:
  "https://www.vanillamodels.pl/assets/img/model/1346/VANILLAMODELS-DanielS-30.jpg",
    stock: "In Stock",

    specifications: {
      productType: "Casual T-Shirt",
      material: "Cotton",
      colour: "White",
      height: "Regular Length",
      width: "Regular Fit",
      weight: "220 g",
    },

    size: {
      productHeight: "Regular Length",
      productWidth: "Regular Fit",
      packageDimensions: "30 × 22 × 4 cm",
    },

    delivery: {
      estimatedTime: "3–7 business days",
      shippingCharges: "Free delivery",
    },

    returnPolicy: {
      returnWindow: "7 days",
      replacement: "Available for damaged products",
      refund: "Refund after product inspection",
    },

    careInstructions: {
      sunlight: "Dry away from direct sunlight",
      watering: "Not applicable",
      maintenance: "Machine wash with similar colours",
    },

    features: [
      "Soft cotton fabric",
      "Breathable material",
      "Comfortable regular fit",
      "Suitable for everyday wear",
      "Easy to style",
    ],

    whatsIncluded: [
      "1 Casual T-Shirt",
    ],

    warranty: "No warranty",

    seller: "Urban Line",
  },

];