import type { Metadata } from "next";

import "./globals.css";
import Header from "./Header";
import 'flowbite';
import Script from "next/script";
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
    <html lang="en">
      <body>
        <Providers>
      <div className="flex relative justify-center p-4">
      <Header />
      </div>
        {children}
        </Providers>

        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
