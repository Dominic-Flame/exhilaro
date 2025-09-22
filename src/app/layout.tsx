// This file wraps every page.
//It MUST default-export a React Component named however you like. 

import "./globals.css";

export const metadata = {
  title: "Exhilaro - Retail & Wholesale",
  description: "Modern essentials for shops and individuals."  
};

export default function RootLayout({ children} : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};