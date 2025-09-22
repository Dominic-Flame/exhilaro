export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  colors?: string[];
  category: "Tees" | "Hoodies" | "Sweats" | "Caps" | "Accessories";
  rating?: number;
  isNew?: boolean;
  inStock?: boolean;
}