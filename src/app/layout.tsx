import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import HeaderNavigation from "@/layout/HeaderNavigation/page";
import Footer from "@/layout/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neon Strategies Phase2",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
