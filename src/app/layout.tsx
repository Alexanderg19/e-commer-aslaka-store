import type { Metadata } from "next";
import { fontPrimary, inter } from "@/config/fonts"; 
import "./globals.css";



export const metadata: Metadata = {
  title: "Alaska | store",
  description: "Tienda virtual de productos principalmente para mujeres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontPrimary.className}>{children}</body>
    </html>
  );
}
