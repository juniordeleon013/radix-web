export interface ProductDetailedInfo {
  ingredients: string;
  benefits: string[];
  usage: string;
  presentation: string;
  warnings: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  category: "producto" | "tratamiento";
  image: string;
  badge?: string;
  includes?: string[];
  images?: string[];
  detailedInfo?: ProductDetailedInfo;
}
