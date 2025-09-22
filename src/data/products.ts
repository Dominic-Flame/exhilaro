import type { Product } from "@/types/product";

export const products: Product[] = [
  { id:"tee-ox", title:"Organic Tee", price:12, compareAt:16,
    image:"https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    colors:["Black","White","Sand"], category:"Tees", rating:4.6, isNew:true, inStock:true },

  { id:"tee-heavy", title:"Heavyweight Tee", price:15,
    image:"https://images.unsplash.com/photo-1594638863998-a2426d4fdf57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYXZ5JTIwdHNoaXJ0fGVufDB8fDB8fHww",
    colors:["Coal","White"], category:"Tees", rating:4.8, inStock:true },

  { id:"tee-relax", title:"Relaxed Tee", price:14,
    image:"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHNoaXJ0fGVufDB8fDB8fHww",
    colors:["Sage","Bone"], category:"Tees", rating:4.3, inStock:true },

  { id:"hoodie", title:"Heavy Hoodie", price:28, compareAt:32,
    image:"https://images.unsplash.com/photo-1579572331145-5e53b299c64e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8fDB8fHww",
    colors:["Black","Coal"], category:"Hoodies", rating:4.7, inStock:true },

  { id:"zip-hood", title:"Zip Hoodie", price:30,
    image:"https://images.unsplash.com/photo-1594238641163-d42c700e4fa0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emlwJTIwaG9vZGllfGVufDB8fDB8fHww",
    colors:["Navy","Grey"], category:"Hoodies", rating:4.2, inStock:false },

  { id:"crew", title:"Crew Sweat", price:22,
    image:"https://images.unsplash.com/photo-1523914088562-e94af834794e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jld25lY2t8ZW58MHx8MHx8fDA%3D",
    colors:["Grey","Navy"], category:"Sweats", rating:4.4, inStock:true },

  { id:"jogger", title:"Fleece Jogger", price:24,
    image:"https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9nZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    colors:["Black","Charcoal"], category:"Sweats", rating:4.1, inStock:true },

  { id:"cap", title:"Dad Cap", price:10,
    image:"https://images.unsplash.com/photo-1606483956061-46a898dce538?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFkJTIwY2FwfGVufDB8fDB8fHww",
    colors:["Black","Olive"], category:"Caps", rating:4.0, inStock:true },

  { id:"beanie", title:"Rib Beanie", price:9,
    image:"https://images.unsplash.com/photo-1511500118080-275313ec90a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhbmllfGVufDB8fDB8fHww",
    colors:["Coal","Moss"], category:"Accessories", rating:4.3, inStock:true },

  { id:"tote", title:"Canvas Tote", price:8,
    image:"https://images.unsplash.com/photo-1630381260512-e3fe55c11973?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZXxlbnwwfHwwfHx8MA%3D%3D",
    colors:["Natural"], category:"Accessories", rating:4.2, inStock:true },

  { id:"tee-long", title:"Long-sleeve Tee", price:16,
    image:"https://images.unsplash.com/photo-1666358087708-d395db443f09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    colors:["White","Black"], category:"Tees", rating:4.5, inStock:true },

  { id:"sweat-zip", title:"Quarter-Zip Sweat", price:26,
    image:"https://images.unsplash.com/photo-1659077188772-7f54f609f7c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN3ZWF0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    colors:["Stone","Navy"], category:"Sweats", rating:4.4, inStock:true },
];
