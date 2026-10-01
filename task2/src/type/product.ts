export type ProductType = {
  id: number;

  title: string;

  category: string;

  brand: string;

  price: number;

  originalPrice: number;

  discount: number;

  rating: number;

  reviews: number;

  description: string;

  image: string;

  stock: string;

  specifications: {
    productType: string;
    material: string;
    colour: string;
    height: string;
    width: string;
    weight: string;
  };

  size: {
    productHeight: string;
    productWidth: string;
    packageDimensions: string;
  };

  delivery: {
    estimatedTime: string;
    shippingCharges: string;
  };

  returnPolicy: {
    returnWindow: string;
    replacement: string;
    refund: string;
  };

  careInstructions: {
    sunlight: string;
    watering: string;
    maintenance: string;
  };

  features: string[];

  whatsIncluded: string[];

  warranty: string;

  seller: string;
};