import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { profileData } from "@/data/profileData";
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

export const metadata: Metadata = {
  title: `${profileData.name} - ${profileData.role}`,
  description: profileData.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} ${autography.variable}`}>
        <LoadingProvider>
          <LoadingScreen />
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
