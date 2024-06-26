import { Inter } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banese Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}