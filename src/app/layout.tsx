import type { Metadata } from "next";
import "./globals.css";
import "../styles/font-face.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Apollo Tracker Script */}
        <Script
          id="apollo-tracking-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo() {
                var n = Math.random().toString(36).substring(7),
                    o = document.createElement("script");
                o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                o.async = true;
                o.defer = true;
                o.onload = function () {
                  window.trackingFunctions?.onLoad({
                    appId: "6818e22a5b9d1a000d51e900"
                  });
                };
                document.head.appendChild(o);
              }
              initApollo();
            `,
          }}
        />
      </head>
      <body className={`font-aspekta antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
