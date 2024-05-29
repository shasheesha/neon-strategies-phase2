import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import HeaderNavigation from "@/components/layout/HeaderNavigation/page";
import Footer from "@/components/layout/Footer/page";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import Preloader from "@/components/PreLoader/page";

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
        <Preloader />
        <HeaderNavigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
