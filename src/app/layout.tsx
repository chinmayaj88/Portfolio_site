import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'), // Update with your actual domain
  title: `${profileData.name} - ${profileData.role}`,
  description: profileData.bio,
  keywords: [
    'Full Stack Developer',
    'Cloud Engineer',
    'DevOps Engineer',
    'Backend Developer',
    'AWS',
    'OCI',
    'Python',
    'Node.js',
    'Portfolio',
    profileData.name,
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.bio,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: profileData.avatar.src,
        width: profileData.avatar.width,
        height: profileData.avatar.height,
        alt: profileData.avatar.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.bio,
    images: [profileData.avatar.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
