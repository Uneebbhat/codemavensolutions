import type { Metadata } from "next";
import "./globals.css";
import "../styles/font-face.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Head from "next/head";

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
        <Head>
          <meta
            property="og:title"
            content="Codemaven Solutions | Crafting Innovative Digital Solutions"
          />
          <meta
            property="og:description"
            content="Codemaven Solutions is a cutting-edge software development company specializing in building high-quality web and mobile applications. Our team creates tailored digital experiences that empower businesses to excel in the digital world. Let’s turn your vision into reality and build the future together!"
          />
          <meta property="og:site_name" content="Codemaven Solutions" />
          <meta
            property="og:url"
            content="https://codemavensolutions.vercel.app"
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Codemaven Solutions",
              url: "https://codemavensolutions.vercel.app",
              logo: "https://codemavensolutions.vercel.app/favicon.ico",
            })}
          </script>
        </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
