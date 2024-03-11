import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";

const inter = Noto_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Promart SKU Finder",
  description: "Buscador de SKU con VTEX para Promart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
