import type { Product } from "../types/product";

export const products: Product[] = [
  { id: "tee-ox", title: "Organic Tee", price: 12,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    colors: ["Black","White","Sand"] },
  { id: "hoodie", title: "Heavy Hoodie", price: 28,
    image: "https://images.unsplash.com/photo-1647771746277-eac927afab2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9kZGllfGVufDB8fDB8fHww",
    colors: ["Black","Coal"] },
  { id: "sweat", title: "Crew Sweat", price: 22,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    colors: ["Grey","Navy"] },
  { id: "cap", title: "Dad Cap", price: 10,
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
    colors: ["Black","Olive"] },
];
