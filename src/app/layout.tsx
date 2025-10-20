import "./globals.css";
import "../styles/font-face.css";
import localFont from "next/font/local";
import Header from "@/components/common/Header";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Codemaven Solutions | Crafting Innovative Digital Solutions",
  description:
    "Codemaven Solutions is a cutting-edge software development company specializing in building high-quality web and mobile applications. Our team creates tailored digital experiences that empower businesses to excel in the digital world. Let’s turn your vision into reality and build the future together!",
  openGraph: {
    title: "Codemaven Solutions | Crafting Innovative Digital Solutions",
    description:
      "Codemaven Solutions is a cutting-edge software development company specializing in building high-quality web and mobile applications. Our team creates tailored digital experiences that empower businesses to excel in the digital world. Let’s turn your vision into reality and build the future together!",
    url: "https://www.codemavensolutions.com",
    siteName: "Codemaven Solutions",
    type: "website",
    images: [
      {
        url: "https://www.codemavensolutions.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Codemaven Solutions - Web & Mobile Development, UI/UX designing and Consultation Services",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const polysans = localFont({
  src: "../fonts/polysanstrial-neutralwide.otf",
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${polysans.variable} font-sans`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
