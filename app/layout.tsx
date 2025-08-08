import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";

import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

import "./globals.css";
import { Providers } from "./providers";

const customFont = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trans 7",
  description: "Landing Page using Next.js and Parallax effect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.className} antialiased`}>
        <Providers>
          <ResponsiveNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
