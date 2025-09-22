// A "type" describes the shape of a product object.
// title: string text
// price: number (we'll show as $12 etc.)
// image: path under /public (Next serves from /public at the site root)
// colors: optional list of color names for display
export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  colors?: string[];
};
