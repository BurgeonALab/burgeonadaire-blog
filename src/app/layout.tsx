import type { Metadata } from "next";
import './services/firebase';
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const inter = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore Our Minds | Burgeon Adaire Blog",
  description: "Burgeon Adaire Blog.",
  authors: [
    {
      name: "PT. Burgeon Adaire International",
      url: "https://burgeonadaire.com"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
