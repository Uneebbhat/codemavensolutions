import type { Metadata } from "next";
import "./globals.css";
import "../styles/font-face.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Codemaven Solutions | Crafting Innovative Digital Solutions",
  description:
    "Codemaven Solutions is a cutting-edge software development company specializing in building high-quality web and mobile applications. Our team creates tailored digital experiences that empower businesses to excel in the digital world. Let’s turn your vision into reality and build the future together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-aspekta antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
