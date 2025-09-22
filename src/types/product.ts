export type Product = {
  id: string;
  title: string;
  price: number;          // current price
  compareAt?: number;     // optional “was” price
  image: string;          // URL
  colors?: string[];
  category: "Tees" | "Hoodies" | "Sweats" | "Caps" | "Accessories";
  rating?: number;        // 0–5
  isNew?: boolean;
  inStock?: boolean;
};

