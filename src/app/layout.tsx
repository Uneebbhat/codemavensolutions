import type { Metadata } from "next";
import "./globals.css";
import "../styles/font-face.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Codemaven Solutions | We Build Your Dreams",
  description:
    "Codemaven Solutions is a leading software development company specializing in web and mobile applications. We craft innovative, high-performance digital solutions that empower businesses to thrive in the digital era. Let's build your dream project together!",
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
