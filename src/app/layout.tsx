import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "African Plains Conservation Trust",
  description:
    "African Plains Conservation of Trust is a non-profit organization that works towards sustainable conservation of select habitats and ecosystems in Kenya as well as development of neighbouring communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="African Plains Conservation of Trust is a non-profit organization that works towards sustainable conservation of select habitats and ecosystems in Kenya as well as development of neighbouring communities"
        />
        <meta name="keywords" content="conservation, Kenya, sustainable habitats, ecosystems, non-profit, African ecosystems, community development" />
        <meta name="author" content="African Plains Conservation Trust" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="African Plains Conservation Trust" />
        <meta
          property="og:description"
          content="Supporting the sustainable conservation of ecosystems and the development of surrounding communities in Kenya."
        />
        <meta property="og:image" content="/hero-img.png" />
        <meta property="og:url" content="https://africanplains.org" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="African Plains Conservation Trust" />
        <meta
          name="twitter:description"
          content="Supporting the sustainable conservation of ecosystems and the development of surrounding communities in Kenya."
        />
        <meta name="twitter:image" content="/hero-img.png" />

        {/* Preloading hero image */}
        <link rel="preload" href="/hero-img.png" as="image" type="image/png" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
