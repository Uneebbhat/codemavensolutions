import type { Metadata } from "next";
import "./globals.css";
import "../styles/font-face.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Codemaven Solutions | We Build Your Dreams",
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
