import type { Metadata } from "next";

import "./globals.css";
import Header from "./Header";
import 'flowbite';


export const metadata: Metadata = {
  title: "Make a Meme🥸",
  description: "Meme Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="flex relative justify-center p-4">
      <Header />
      </div>
        {children}
        
      </body>
    </html>
  );
}
