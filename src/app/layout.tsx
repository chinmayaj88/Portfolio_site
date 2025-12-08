import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const autography = localFont({
  src: "../../public/autography/Autography.otf",
  variable: "--font-autography",
});

const christmas = localFont({
  src: "../../public/christmas_market_2/Christmas Market.otf",
  variable: "--font-christmas",
});

const superChiby = localFont({
  src: "../../public/super_chiby/Super Chiby.ttf",
  variable: "--font-super-chiby",
});

export const metadata: Metadata = {
  title: "Chinmaya Jena - Developer, Devops & Cloud Engineer",
  description: "Product Designer & Artist specializing in user experience, design systems, and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} ${autography.variable} ${christmas.variable} ${superChiby.variable}`}>
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
