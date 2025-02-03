import type { Metadata } from "next";

import "./globals.css";
import Header from "./Header";
import 'flowbite';
import { Providers } from './providers';

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
      <div className="flex relative justify-center p-4">
      <Header />
      </div>
        {children}
        </Providers>

        
      </body>
    </html>
  );
}
